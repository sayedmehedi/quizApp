import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ExamTypeScreen from '../screens/ExamTypeScreen';
import QuizScreen from '../screens/QuizScreen';
import TabNavigator from './HomeTabNavigator';


const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
   
      <RootStack.Navigator
     
        screenOptions={{
           headerShown: false,
         
        }}>
        <RootStack.Screen name="initial" component={WelcomeScreen} />
        <RootStack.Screen name="examType" component={ExamTypeScreen} />
        <RootStack.Screen name="home" component={TabNavigator} />
        
        <RootStack.Screen name="quiz" component={QuizScreen} />
      </RootStack.Navigator>
   
  );
};

export default RootStackNavigator;
