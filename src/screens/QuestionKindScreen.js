import React from 'react';
import Toast from 'react-native-toast-message';
import {Slider} from '@miblanchard/react-native-slider';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useGetProfileQuery from '../hooks/useGetProfileQuery';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import useCreateExaminationMutation from '../hooks/useCreateExaminationMutation';

const QuestionKindScreen = ({navigation, route}) => {
  const [coinCount, setCoinCount] = React.useState(20);

  const [questionKind, setQuestionKind] = React.useState('');
  const [questionCount, setQuestionCount] = React.useState(1);

  const {
    data: profileData,
    error: profileError,
    isError: isProfileError,
    isLoading: isProfileLoading,
  } = useGetProfileQuery();

  React.useEffect(() => {
    if (isProfileError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: profileError.message,
      });
    }
  }, [isProfileError, profileError]);

  const {
    error: createExamError,
    mutate: createExamination,
    isLoading: isCreatingExam,
    isError: isCreateExamError,
  } = useCreateExaminationMutation();

  React.useEffect(() => {
    if (isCreateExamError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: createExamError.message,
      });
    }
  }, [isCreateExamError, createExamError]);

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
    <>
      <View style={{flex: 1, backgroundColor: '#000815'}}>
        <View style={styles.headerContainer}>
          <Ionicons name="arrow-back-outline" size={30} color={'white'} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 80,
                height: 40,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/coin.png')}
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
                <Text style={{color: 'white', marginLeft: 5}}>{coinCount}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setCoinCount(prevCoinsCount => prevCoinsCount + 1);
              }}
              style={{
                height: 25,
                width: 25,
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                marginLeft: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="plus" size={16} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            flex: 1,
          }}>
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: '#1E2237',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 36,
                color: 'white',
                textAlign: 'center',
              }}>
              What kind of exam type you prefer?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setQuestionKind('input');
              }}
              style={{
                height: 50,
                width: 150,
                borderRadius: 10,
                backgroundColor: questionKind === 'input' ? 'white' : '#1E2237',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: questionKind === 'input' ? 'black' : 'white'}}>
                Input Answer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setQuestionKind('boolean');
              }}
              style={{
                height: 50,
                width: 150,
                borderRadius: 10,
                backgroundColor:
                  questionKind === 'boolean' ? 'white' : '#1E2237',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: questionKind === 'boolean' ? 'black' : 'white'}}>
                True/False
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setQuestionKind('ordering');
              }}
              style={{
                height: 50,
                width: 150,
                borderRadius: 10,
                backgroundColor:
                  questionKind === 'ordering' ? 'white' : '#1E2237',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: questionKind === 'ordering' ? 'black' : 'white',
                }}>
                Order Select
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setQuestionKind('random');
              }}
              style={{
                height: 50,
                width: 150,
                borderRadius: 10,
                backgroundColor:
                  questionKind === 'random' ? 'white' : '#1E2237',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: questionKind === 'random' ? 'black' : 'white'}}>
                Random
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {questionCount}
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={{color: 'white'}}>1</Text>
            </View>

            <View style={{flex: 1, marginHorizontal: 10}}>
              <Slider
                step={1}
                minimumValue={1}
                maximumValue={100}
                value={questionCount}
                onValueChange={value => {
                  if (Array.isArray(value)) {
                    setQuestionCount(value[0]);
                  } else {
                    setQuestionCount(value);
                  }
                }}
              />
            </View>

            <View>
              <Text style={{color: 'white'}}>100</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          disabled={isCreatingExam}
          onPress={() => {
            if (questionKind === '') {
              Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Please select exam type',
              });

              return;
            }

            Toast.show({
              type: 'info',
              text2: 'Processing..',
            });

            createExamination(
              {
                quesKind: questionKind,
                quesCount: questionCount,
                difficultyLevel: route.params.difficultyLevel,
              },
              {
                onSuccess(data) {
                  if (data?.data !== undefined) {
                    navigation.navigate('Quiz', {
                      examination: data.data,
                      coinCount,
                    });
                  }
                },
              },
            );
          }}
          style={{
            width: 70,
            right: 10,
            height: 70,
            bottom: 10,
            borderRadius: 35,
            alignItems: 'center',
            alignSelf: 'flex-end',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <FontAwesome5 name="arrow-right" color={'#000815'} size={40} />
        </TouchableOpacity>
      </View>
    </>
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

export default QuestionKindScreen;
