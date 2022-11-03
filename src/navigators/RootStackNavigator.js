import React from 'react';
import {View, Text} from 'react-native';
import QuizScreen from '../screens/QuizScreen';
import TabNavigator from './HomeTabNavigator';
import Toast from 'react-native-toast-message';
import ResultScreen from '../screens/ResultScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from 'react-native-splash-screen';
import QuestionKindScreen from '../screens/QuestionKindScreen';
import {createStackNavigator} from '@react-navigation/stack';
import useGetAuthTokenQuery from '../hooks/useGetAuthTokenQuery';
import ExamDifficultyScreen from '../screens/ExamDifficultyScreen';
import ExamloaderScreen from '../screens/ExamloaderScreen';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  const {
    error: authTokenError,
    isError: isAuthTokenError,
    data: getAuthTokenResponse,
    isLoading: isAuthTokenLoading,
  } = useGetAuthTokenQuery();

  React.useEffect(() => {
    if (!isAuthTokenLoading) {
      SplashScreen.hide();
    }
  }, [isAuthTokenLoading]);

  React.useEffect(() => {
    if (isAuthTokenError) {
      Toast.show({
        text1: 'Error',
        type: 'error',
        text2: authTokenError.message,
      });
    }
  }, [isAuthTokenError, authTokenError]);

  if (isAuthTokenLoading) {
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
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!getAuthTokenResponse ? (
        <RootStack.Screen name="initial" component={WelcomeScreen} />
      ) : (
        <>
          <RootStack.Screen name="home" component={TabNavigator} />
          <RootStack.Screen
            name="QuestionKind"
            component={QuestionKindScreen}
          />
          <RootStack.Screen
            name="ExamDifficulty"
            component={ExamDifficultyScreen}
          />
          <RootStack.Screen name="Quiz" component={QuizScreen} />
          <RootStack.Screen name="Examresult" component={ResultScreen} />
          <RootStack.Screen name="ExamLoader" component={ExamloaderScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
