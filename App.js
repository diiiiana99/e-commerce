
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import ProductInfo from "./screens/ProductInfo";
import MyCart from "./screens/MyCart";
import Profile from "./screens/Profile";
import SearchScreen from "./screens/SearchScreen";
import Notifications from "./screens/Notifications";
import plus from './assets/plus.png'
import SneakerDetail from "./components/SneakerDetail";
import { Animated, Dimensions, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        headerTintColor: '#757575',
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Home"  
      options={{
            title: '',
            headerTintColor: '#757575',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
         component={Home} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="MyCart" component={MyCart} />
    </Stack.Navigator> 
  )

}
const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    };
  }
};
const Search = () => {
  return (
      <Stack.Navigator
      headerMode='none' 
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen    name='SneakerDetail'
    component={SneakerDetail}
    options={() => options} />
    </Stack.Navigator> 
  )
}


export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        headerShown: false,
        // Floating Tab Bar...
        style: {
          // backgroundColor: 'white',
          marginHorizontal: 20,
          // Max Height...
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
            title: '',
            headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? 'blue' : 'black'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={Search} options={{
          title: '',
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? 'blue' : 'black'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        {

          // Extra Tab Screen For Action Button..
        }
            <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
            tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'blue',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 60 : 30
              }}>
                <Image source={plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={Notifications} options={{
          title: '',
          headerShown: false,
          backgroundColor: 'blue',

          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20,
            }}>
              <FontAwesome5
                name="bell"
                size={20}
                color={focused ? 'blue' : 'black'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Settings"} component={Profile} options={{
         title: '',
         headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'blue' : 'black'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          headerTransparent: true,

          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 70,
        // Horizontal Padding = 20...
        left: 25,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>      
  </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 30

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}






