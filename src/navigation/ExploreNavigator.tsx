import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@screens';
import React from 'react';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
import { ExploreParamList } from './types';

const ExploreStack = createStackNavigator<ExploreParamList>();

const ExploreNavigator = () => {
  return (
    <ExploreStack.Navigator>
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
          headerTitle: 'Search your destination',
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;
