import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { HomeScreen } from '@screens';
import React from 'react';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
import { ExploreParamList } from './types';

const ExploreStack = createStackNavigator<ExploreParamList>();

const navigatorOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontSize: 14,
  },
};

const ExploreNavigator = () => {
  return (
    <ExploreStack.Navigator screenOptions={navigatorOptions}>
      <ExploreStack.Screen
        name='Welcome'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <ExploreStack.Screen
        name='SearchResults'
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;
