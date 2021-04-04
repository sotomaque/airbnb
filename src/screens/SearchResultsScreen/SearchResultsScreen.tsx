import { Listing as ListingType, ListListingsQuery } from '@api';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import { Listing } from '@components';
import { listListings } from '@graphql/queries';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

type SearchResultsScreenProps = {
  guests: number;
};

const SearchResultsScreen = ({ guests }: SearchResultsScreenProps) => {
  const [listings, setListings] = useState<ListingType[] | null>(null);

  console.log('guests', guests);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = (await API.graphql(
          graphqlOperation(listListings)
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
    <View>
      {listings && (
        <FlatList
          data={listings}
          renderItem={({ item }) => <Listing listing={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default SearchResultsScreen;
