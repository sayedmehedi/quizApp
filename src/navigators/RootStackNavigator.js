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
import useGetAuthDataQuery from '../hooks/useGetAuthDataQuery';
import ExamDifficultyScreen from '../screens/ExamDifficultyScreen';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  const {
    error: authDataError,
    data: getAuthDataResponse,
    isError: isAuthDataError,
    isLoading: isAuthDataLoading,
  } = useGetAuthDataQuery();

  React.useEffect(() => {
    if (!isAuthDataLoading) {
      SplashScreen.hide();
    }
  }, [isAuthDataLoading]);

  React.useEffect(() => {
    if (isAuthDataError) {
      Toast.show({
        text1: 'Error',
        type: 'error',
        text2: authDataError.message,
      });
    }
  }, [isAuthDataError, authDataError]);

  if (isAuthDataLoading) {
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
      {!getAuthDataResponse ? (
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
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
