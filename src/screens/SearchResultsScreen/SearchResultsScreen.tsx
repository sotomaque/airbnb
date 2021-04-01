import { Listing } from '@components';
import React from 'react';
import { FlatList, View } from 'react-native';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Listing listing={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResultsScreen;
