import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SearchResultsScreen } from '@screens';
import React from 'react';
import { ExploreParamList } from './types';

const ExploreStack = createStackNavigator<ExploreParamList>();

const ExploreNavigator = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name='Welcome' component={HomeScreen} />
      <ExploreStack.Screen
        name='SearchResults'
        component={SearchResultsScreen}
        options={{
          headerShown: true,
          headerTitle: 'Search your destination',
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;
