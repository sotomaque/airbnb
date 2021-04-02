import Colors from '@constants/Colors';
import useColorScheme from '@hooks/useColorScheme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchResultsMapScreen, SearchResultsScreen } from '@screens';
import * as React from 'react';
import { SearchResultsTabParamList } from './types';

const SearchTab = createMaterialTopTabNavigator<SearchResultsTabParamList>();

const SearchResultsTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <SearchTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
      }}
    >
      <SearchTab.Screen name='List' component={SearchResultsScreen} />
      <SearchTab.Screen name='Map' component={SearchResultsMapScreen} />
    </SearchTab.Navigator>
  );
};

export default SearchResultsTabNavigator;
