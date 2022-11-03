import React from 'react';
import Toast from 'react-native-toast-message';
import useLoginMutation from '../hooks/useLoginMutation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useAddAuthTokenMutation from '../hooks/useAddAuthTokenMutation';

const WelcomeScreen = ({navigation}) => {
  const {mutate: login, isLoading: isLoggingIn} = useLoginMutation();
  const {mutate: addAuthData, isLoading: isSettingAuthData} =
    useAddAuthTokenMutation();

  function onGoogleButtonPress() {
    // login(undefined, {
    //   onSuccess({data}) {
    //     console.log('success', data);
    const message = 'Login successful';
    //     const token = data.token;
    //     const user = data.user;

    const token = '1|1W6a7ukhXdiMVc0Gs4hhNAqhhdLOSQYxF4CyT6SB';

    addAuthData(token, {
      onSuccess() {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: message,
        });
      },
    });
    // }
    //   onError(error) {
    //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //       // user cancelled the login flow
    //       console.log('user cancelled the login flow');
    //     } else if (error.code === statusCodes.IN_PROGRESS) {
    //       console.log('operation (e.g. sign in) is in progress already');
    //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //       console.log('play services not available or outdated');
    //     } else {
    //       console.log('some other error', error);
    //       // some other error happened
    //     }

    //     Toast.show({
    //       type: 'error',
    //       text1: 'Error',
    //       text2: error.message,
    //     });
    //   },
    // });
  }

  return (
    <View
      style={{flex: 1, backgroundColor: '#000815', justifyContent: 'center'}}>
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
          {/* <Text
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
              color: 'white',
              paddingLeft: 10,
            }}
          />
          <Text
            style={{color: 'white', alignSelf: 'center', marginVertical: 10}}>
            ------------------- Or -------------------
          </Text> */}
          <TouchableOpacity
            onPress={onGoogleButtonPress}
            disabled={isLoggingIn || isSettingAuthData}
            style={{
              height: 60,
              width: 240,
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
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
          alignSelf: 'flex-end',
          right: 10,
        }}>
        <FontAwesome5 name="arrow-right" color={'#000815'} size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
