import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useGetAuthDataQuery from '../hooks/useGetAuthDataQuery';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const ExamDifficultyScreen = ({navigation}) => {
  const {data: getAuthDataResponse} = useGetAuthDataQuery();

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#000815'}}
      contentContainerStyle={{
        paddingBottom: 150,
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 3,
            borderRadius: 50,
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: getAuthDataResponse.user.avatar,
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          />
        </View>

        <View
          style={{
            padding: 5,
            marginLeft: 10,
            borderRadius: 10,
            backgroundColor: '#FFFBE3',
          }}>
          <Text style={{color: 'black', fontSize: 14}}>Welcome!</Text>
          <Text style={{color: 'black', fontSize: 17}}>
            {getAuthDataResponse.user.name}
          </Text>
        </View>

        <View style={{flex: 1}} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 5,
              alignItems: 'center',
              flexDirection: 'row',
              borderColor: 'white',
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/coin.png')}
              style={{
                width: 25,
                height: 25,
                marginTop: 5,
              }}
            />
            <Text style={{color: 'white', marginLeft: 5}}>
              {getAuthDataResponse.user.coins}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 25,
              width: 25,
              marginLeft: 4,
              borderRadius: 14,
              alignItems: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Feather name="plus" size={16} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QuestionKind', {
                difficultyLevel: 'easy',
              })
            }
            style={[styles.typeContainer, {borderRadius: 20}]}>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                EASY
              </Text>
              <View
                style={{
                  height: 5,
                  width: 120,
                  backgroundColor: 'white',
                  marginVertical: 10,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    height: 5,
                    width: '80%',
                    backgroundColor: 'blue',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flex: 2,
                padding: 5,
                justifyContent: 'center',
                backgroundColor: '#00AA3A',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 8}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'green'}
                    size={10}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'green'}
                    size={10}
                  />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS FOR EACH WRONG ANSWER
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QuestionKind', {
                difficultyLevel: 'medium',
              })
            }
            style={[
              styles.typeContainer,
              {borderRadius: 20, backgroundColor: '#6401E1'},
            ]}>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                HARD
              </Text>
              <View
                style={{
                  height: 5,
                  width: 120,
                  backgroundColor: 'white',
                  marginVertical: 10,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    height: 5,
                    width: '80%',
                    backgroundColor: 'blue',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: '#4800A3',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                justifyContent: 'center',
                // alignItems:'center',
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 8}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'#4800A3'}
                    size={10}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'#4800A3'}
                    size={10}
                  />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS FOR EACH WRONG ANSWER
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QuestionKind', {
                difficultyLevel: 'hard',
              })
            }
            style={[
              styles.typeContainer,
              {backgroundColor: '#019EE1', borderRadius: 20},
            ]}>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                MEDIUM
              </Text>
              <View
                style={{
                  height: 5,
                  width: 120,
                  backgroundColor: 'white',
                  marginVertical: 10,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    height: 5,
                    width: '80%',
                    backgroundColor: 'blue',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: '#0078AC',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                justifyContent: 'center',
                // alignItems:'center',
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 8}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'#019EE1'}
                    size={10}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'#019EE1'}
                    size={10}
                  />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS FOR EACH WRONG ANSWER
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QuestionKind', {
                difficultyLevel: 'ninja',
              })
            }
            style={[
              styles.typeContainer,
              {backgroundColor: '#E1016D', borderRadius: 20},
            ]}>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                NINJA
              </Text>
              <View
                style={{
                  height: 5,
                  width: 120,
                  backgroundColor: 'white',
                  marginVertical: 10,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    height: 5,
                    width: '80%',
                    backgroundColor: 'blue',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: '#79003A',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                justifyContent: 'center',
                // alignItems:'center',
                padding: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 8}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'#79003A'}
                    size={10}
                  />
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 15,
                    width: 15,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}>
                  <Ionicons
                    name="ios-checkmark-done-sharp"
                    color={'#79003A'}
                    size={10}
                  />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  STARTS WITH 20 TOKENS FOR EACH WRONG ANSWER
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    height: 266,
    width: screenWidth / 2 - 20,
    borderRadius: 5,
    backgroundColor: '#00E44E',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ExamDifficultyScreen;
