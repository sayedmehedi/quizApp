import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View
      style={{flex: 1, backgroundColor: '#000815', justifyContent: 'center',}}>
      <View style={{alignItems: 'center', padding: 20}}>
        <Image
          source={require('../assets/welcome.png')}
          style={{height: 200, width: '80%'}}
        />

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '500',
          }}>
          Welcome to DQUIZ, Hope you learn a lot by our question answer project.
        </Text>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '300',
              marginVertical: 10,
            }}>
            Enter your name:
          </Text>
          <TextInput
            placeholder="Your name"
            placeholderTextColor={'#D7D7D7'}
            style={{
              height: 50,
              width: 240,
              backgroundColor: '#1E2237',
              borderRadius: 3,
              color:'white',
              paddingLeft:10
            }}
          />
          <Text
            style={{color: 'white', alignSelf: 'center', marginVertical: 10}}>
            ------------------- Or -------------------
          </Text>
          <TouchableOpacity
            style={{
              height: 60,
              width: 240,
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              justifyContent:'space-between',
              paddingHorizontal:15
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="google" size={20} color={'white'} />
            </View>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
        style={{
          height: 70,
          width: 70,
          borderRadius: 35,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'flex-end',
          right:10
          
        }}>
        <FontAwesome5 name="arrow-right" color={'#000815'} size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
