import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useStopwatch} from 'react-timer-hook';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import useAnswerExaminationMutation from '../hooks/useAnswerExaminationMutation';
import useGetProfileQuery from '../hooks/useGetProfileQuery';

const {width} = Dimensions.get('screen');

const QuizScreen = ({route, navigation}) => {
  const ref = React.useRef();
  const [coinCount, setCoinCount] = React.useState(0);
  const [showHint, setShowHint] = React.useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const {
    error,
    isError,
    mutate: answerExamination,
    isLoading: isAnsweringExamination,
  } = useAnswerExaminationMutation();

  const {
    data: profileData,
    error: profileError,
    isError: isProfileError,
    isLoading: isProfileLoading,
  } = useGetProfileQuery();

  React.useEffect(() => {
    if (!isProfileLoading && !!profileData) {
      setCoinCount(profileData?.data?.coins);
    }
  }, [profileData, isProfileLoading]);

  React.useEffect(() => {
    if (isProfileError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: profileError.message,
      });
    }
  }, [isProfileError, profileError]);

  React.useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });
    }
  }, [isError, error]);

  const {minutes, seconds, pause} = useStopwatch({
    autoStart: true,
  });

  const {control, setValue, watch} = useForm({
    defaultValues: {
      questions: [],
    },
  });

  const questions = watch(`questions`);
  const currentQuestion = questions[currentSlideIndex];

  const {fields} = useFieldArray({
    control,
    name: 'questions',
  });

  React.useEffect(() => {
    setValue(
      'questions',
      route.params.examination.questions.map(question => ({
        ...question,
        is_hinted: false,
        is_skipped: false,
        question_id: question.id,
      })),
    );
  }, [route.params.examination.questions, setValue]);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== route.params.examination.questions.length) {
      const offset = nextSlideIndex * width;

      ref?.current.scrollTo({x: offset, y: 0, animated: true});
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      pause();
      answerExamination(
        {
          answers: questions,
          duration: (minutes * 60 + seconds) * 1000,
          examinationId: route.params.examination.id,
        },
        {
          onSuccess({data}) {
            navigation.replace('Examresult', {
              examination: data,
            });
          },
        },
      );
    }
  };

  if (isProfileLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000815'}}>
      <View style={styles.headerContainer}>
        <Ionicons name="arrow-back-outline" size={30} color={'white'} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 80,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/coin.png')}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text style={{color: 'white', marginLeft: 5}}>{coinCount}</Text>
            </View>
          </View>
          <View
            style={{
              width: 55,
              height: 25,
              marginLeft: 4,
              borderRadius: 14,
              alignItems: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              justifyContent: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
              }}>
              {minutes}:{seconds}
            </Text>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <View
          style={{
            height: 8,
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 8,
              borderRadius: 10,
              backgroundColor: 'blue',
              width: `${
                ((currentSlideIndex + 1) /
                  route.params.examination.questions.length) *
                100
              }%`,
            }}
          />
        </View>

        <View
          style={{
            height: 50,
            borderRadius: 10,
            marginVertical: 15,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 20,
            backgroundColor: '#1E2237',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white'}}>Questions</Text>
          <Text style={{color: 'white'}}>
            {currentSlideIndex + 1}/{route.params.examination.questions.length}
          </Text>
        </View>
      </View>

      <ScrollView
        ref={ref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}>
        {fields.map((question, index) => (
          <View
            key={question.id}
            style={{
              width,
              paddingHorizontal: 30,
            }}>
            <View>
              <View
                style={{
                  padding: 20,
                  width: '100%',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1E2237',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                    }}>
                    {question?.text}
                  </Text>
                </View>
              </View>

              {currentQuestion.is_skipped ? (
                <Text
                  style={{
                    padding: 10,
                    color: 'white',
                    borderWidth: 1,
                    borderRadius: 10,
                    textAlign: 'center',
                    marginVertical: 20,
                  }}>
                  Skipped
                </Text>
              ) : question.kind === 'input' ? (
                <Controller
                  control={control}
                  name={`questions.${index}.given_answer`}
                  render={({field: givenAnswer}) => (
                    <TextInput
                      value={givenAnswer.value}
                      onChangeText={givenAnswer.onChange}
                      placeholder={'Type Your answer'}
                      placeholderTextColor={'#5A5A5A'}
                      style={{
                        height: 60,
                        width: '100%',
                        borderWidth: 1,
                        color: 'white',
                        paddingLeft: 15,
                        borderRadius: 10,
                        marginVertical: 20,
                        borderColor: '#FFFFFF',
                      }}
                    />
                  )}
                />
              ) : (
                <View style={{marginVertical: 20}}>
                  {question.options.map((opt, idx) => (
                    <Controller
                      key={idx}
                      control={control}
                      name={`questions.${index}.given_answer`}
                      render={({field: givenAnswer}) => (
                        <View
                          style={{
                            width: '100%',
                            marginBottom: 10,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              givenAnswer.onChange(opt);
                            }}>
                            <Text
                              style={{
                                padding: 10,
                                fontSize: 17,
                                color: 'white',
                                borderWidth: 1,
                                borderRadius: 10,
                                fontWeight: '500',
                                textAlign: 'center',
                                borderColor:
                                  givenAnswer.value === opt ? 'blue' : 'white',
                                backgroundColor:
                                  givenAnswer.value === opt
                                    ? 'blue'
                                    : 'transparent',
                              }}>
                              {opt}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    />
                  ))}
                </View>
              )}

              <View
                style={{
                  padding: 10,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {!!currentQuestion.given_answer ||
                currentQuestion.is_skipped ? null : (
                  <Controller
                    control={control}
                    name={`questions.${index}.is_skipped`}
                    render={({field: isSkipped}) => (
                      <TouchableOpacity
                        onPress={() => {
                          isSkipped.onChange(true);
                          setCoinCount(prevCount => prevCount - 1);
                        }}>
                        <Text style={{color: 'white', fontSize: 14}}>
                          SKIP QUESTION
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setValue(`questions.${currentSlideIndex}.is_hinted`, true);
                setShowHint(true);
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                alignItems: 'center',
                backgroundColor: 'white',
                justifyContent: 'center',
              }}>
              <AntDesign name={'info'} size={14} color={'black'} />
            </TouchableOpacity>
            <Text
              style={{
                padding: 5,
                height: 30,
                color: 'white',
                marginLeft: 10,
                marginTop: -30,
                backgroundColor: '#1E2237',
              }}>
              Hints
            </Text>
          </View>

          <TouchableOpacity
            onPress={goToNextSlide}
            disabled={isAnsweringExamination}
            style={{
              right: 10,
              width: 70,
              height: 70,
              bottom: 10,
              borderRadius: 35,
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name="arrow-right" color={'#000815'} size={40} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={showHint} transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}>
          <View
            style={{
              padding: 20,
              width: '100%',
              backgroundColor: '#1E2237',
            }}>
            <TouchableOpacity
              style={{marginLeft: 'auto', marginBottom: 20}}
              onPress={() => {
                setShowHint(false);
              }}>
              <AntDesign name={'close'} color={'white'} size={30} />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                color: 'white',
                borderRadius: 10,
              }}>
              {currentQuestion?.hint ?? ''}
            </Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default QuizScreen;
