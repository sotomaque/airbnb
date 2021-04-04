import { Listing as ListingType } from '@api';
import { Listing } from '@components';
import React from 'react';
import { FlatList, View } from 'react-native';

type SearchResultsScreenProps = {
  listings: ListingType[] | null;
};

const SearchResultsScreen = ({ listings }: SearchResultsScreenProps) => {
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
