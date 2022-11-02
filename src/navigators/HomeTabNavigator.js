import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ResultsScreen from '../screens/ResultsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ExaminationsScreen from '../screens/ExaminationsScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          left: 20,
          right: 20,
          height: 90,
          bottom: 25,
          borderRadius: 15,
          ...styles.shadow,
          position: 'absolute',
          backgroundColor: '#1E2237',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <HomeTab.Screen
        name="Examinations"
        component={ExaminationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo
                size={22}
                name="home"
                color={focused ? 'white' : 'gray'}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? 'white' : 'gray',
                }}>
                Exams
              </Text>
            </View>
          ),
        }}
      />

      <HomeTab.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Foundation
                size={22}
                name="results"
                color={focused ? 'white' : 'gray'}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? 'white' : 'gray',
                }}>
                Results
              </Text>
            </View>
          ),
        }}
      />

      <HomeTab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons
                size={22}
                name="leaderboard"
                color={focused ? 'white' : 'gray'}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? 'white' : 'gray',
                }}>
                Leaderboard
              </Text>
            </View>
          ),
        }}
      />

      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                size={22}
                name="user-circle"
                color={focused ? 'white' : 'gray'}
              />
              <Text
                style={{
                  color: focused ? 'white' : 'gray',
                  fontSize: 10,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default TabNavigator;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
