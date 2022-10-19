import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
const screenWidth = Dimensions.get('screen').width;

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000815'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderWidth: 5,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://image.shutterstock.com/mosaic_250/2805913/1713757231/stock-photo-young-buisnessman-wearing-eyeglasses-jacket-and-shirt-holding-arms-crossed-looking-at-camera-1713757231.jpg',
            }}
            style={{
              height: 90,
              width: 90,
              borderRadius: 50,
            }}
          />
        </View>
        <View>
          <Text style={{color: 'white'}}>Welcome!</Text>
          <Text style={{color: 'white'}}>Muhib Ahmed</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('examType')}
            style={[
              styles.typeContainer,
              { borderRadius: 20},
            ]}>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
                EASY
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: '#00AA3A',
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
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 5}}>
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

          <TouchableOpacity
            style={[
              styles.typeContainer,
              { borderRadius: 20,backgroundColor:'#6401E1'},
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
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 5}}>
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
        <View style={{marginTop:20}}>
        <TouchableOpacity
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
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 5}}>
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

          <TouchableOpacity
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
                }}>
                100 EASY QUESTIONS FOR DEVELOPING YOUR SKILL
              </Text>

              <View style={{flexDirection: 'row', marginVertical: 5}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    height: 266,
    width: screenWidth / 2 - 20,
    borderRadius: 5,
    backgroundColor: '#00E44E',
    borderRadius: 10,
    marginTop:10
  },
});

export default HomeScreen;
