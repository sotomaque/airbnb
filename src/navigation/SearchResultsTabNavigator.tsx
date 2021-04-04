import Colors from '@constants/Colors';
import useColorScheme from '@hooks/useColorScheme';
import { RouteProp } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchResultsMapScreen, SearchResultsScreen } from '@screens';
import * as React from 'react';
import { ExploreParamList, SearchResultsTabParamList } from './types';

const SearchTab = createMaterialTopTabNavigator<SearchResultsTabParamList>();

type SearchResultsTabNavigatorProps = {
  route: RouteProp<ExploreParamList, 'SearchResults'>;
};

const SearchResultsTabNavigator = ({
  route,
}: SearchResultsTabNavigatorProps) => {
  const colorScheme = useColorScheme();
  const guests = route.params.guests;
  return (
    <SearchTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
      }}
    >
      <SearchTab.Screen name='List'>
        {() => <SearchResultsScreen guests={guests} />}
      </SearchTab.Screen>
      <SearchTab.Screen name='Map'>
        {() => <SearchResultsMapScreen guests={guests} />}
      </SearchTab.Screen>
    </SearchTab.Navigator>
  );
};

export default SearchResultsTabNavigator;
