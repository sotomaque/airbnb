import { Listing as ListingType, ListListingsQuery } from '@api';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import Colors from '@constants/Colors';
import { listListings } from '@graphql/queries';
import useColorScheme from '@hooks/useColorScheme';
import { RouteProp } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchResultsMapScreen, SearchResultsScreen } from '@screens';
import React, { useEffect, useState } from 'react';
import { ExploreParamList, SearchResultsTabParamList } from './types';

const SearchTab = createMaterialTopTabNavigator<SearchResultsTabParamList>();

type SearchResultsTabNavigatorProps = {
  route: RouteProp<ExploreParamList, 'SearchResults'>;
};

const SearchResultsTabNavigator = ({
  route,
}: SearchResultsTabNavigatorProps) => {
  const colorScheme = useColorScheme();
  const { guests, viewport } = route.params;
  const [listings, setListings] = useState<ListingType[] | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = (await API.graphql(
          graphqlOperation(listListings, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        )) as GraphQLResult<ListListingsQuery>;
        if (res.data?.listListings?.items) {
          setListings(res.data.listListings.items);
        }
      } catch (error) {
        console.error('error fetching listings', error);
      }
    };

    fetchListings();
  }, []);

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
        {() => <SearchResultsScreen listings={listings} />}
      </SearchTab.Screen>
      <SearchTab.Screen name='Map'>
        {() => <SearchResultsMapScreen listings={listings} />}
      </SearchTab.Screen>
    </SearchTab.Navigator>
  );
};

export default SearchResultsTabNavigator;
