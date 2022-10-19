import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {View, Text, TouchableNativeFeedback,StyleSheet} from "react-native";
import {  createBottomTabNavigator,} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";



const HomeTab = createBottomTabNavigator();



const TabNavigator = () => {
  

  return (
    <HomeTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height:90,
        width:'100%',
        elevation: 0,
        backgroundColor: '#1E2237',
        ...styles.shadow,
        bottom:20,
        position:'absolute',
        borderRadius:10,
        
       
        
      },
      tabBarHideOnKeyboard: true,
      //tabBarButton: buttonNativeFeedback,
      }}>
      <HomeTab.Screen
        component={HomeScreen}
        name='Home'
    
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}>
              <Entypo
                size={22}
                name="home"
                color={focused ? 'white' : "gray"}
              />
              <Text
                style={{
                  color: focused ? 'white' : "gray",
                  fontSize: 10,
                  
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <HomeTab.Screen
       name="map"
       component={QuizScreen}
       options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
            <FontAwesome5
              size={22}
              name="map-marker-alt"
              color={focused ? 'white' : "gray"}
            />
            <Text
              style={{
                color: focused ? 'white' : "gray",
                fontSize: 10,
                
              }}>
              Map
            </Text>
          </View>
        ),
      }}
       
      />
        <HomeTab.Screen
       name="message"
       component={QuizScreen}
       options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
            <MaterialIcons
              size={22}
              name="mark-email-unread"
              color={focused ? 'white' : "gray"}
            />
            <Text
              style={{
                color: focused ? 'white' : "gray",
                fontSize: 10,
                
              }}>
              Messages
            </Text>
          </View>
        ),
      }}
       
      />
        <HomeTab.Screen
       name="war"
       component={QuizScreen}
       options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
            <FontAwesome5
              size={22}
              name="bookmark"
              color={focused ? 'white' : "gray"}
            />
            <Text
              style={{
                color: focused ? 'white' : "gray",
                fontSize: 10,
                
              }}>
              War
            </Text>
          </View>
        ),
      }}
       
      />
        <HomeTab.Screen
       name="profile"
       component={QuizScreen}
       options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
            <FontAwesome5
              size={22}
              name="user-circle"
              color={focused ? 'white' : "gray"}
            />
            <Text
              style={{
                color: focused ? 'white' : "gray",
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
