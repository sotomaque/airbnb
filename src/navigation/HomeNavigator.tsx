import { createStackNavigator } from '@react-navigation/stack';
import {
  DestinationSearchScreen,
  GuestDetailsScreen,
  HomeScreen,
} from '@screens';
import React from 'react';
import { HomeParamList } from './types';

const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='Home' component={HomeScreen} />
      <HomeStack.Screen
        name='DestinationSearch'
        component={DestinationSearchScreen}
      />
      <HomeStack.Screen
        name='GuestDetails'
        component={GuestDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: 'How many people?',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
