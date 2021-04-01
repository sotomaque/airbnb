import Colors from '@constants/Colors';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import useColorScheme from '@hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@screens';
import * as React from 'react';
import ExploreNavigator from './ExploreNavigator';
import { HomeTabParamList } from './types';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <HomeTab.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <HomeTab.Screen
        name='Explore'
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='search1' size={24} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name='Saved'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='hearto' size={24} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name='Trips'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='airbnb' size={24} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name='Inbox'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='message1' size={24} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name='Profile'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='ios-person-circle-outline'
              size={24}
              color={color}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;
