import Colors from '@constants/Colors';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import useColorScheme from '@hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchResultsScreen } from '@screens';
import * as React from 'react';
import HomeNavigator from './HomeNavigator';
import { BottomTabParamList, SearchParamList } from './types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Explore'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Explore'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='search1' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Saved'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='hearto' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Trips'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='airbnb' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Inbox'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='message1' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={SearchNavigator}
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
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchResults'
        component={SearchResultsScreen}
      />
    </SearchStack.Navigator>
  );
}
