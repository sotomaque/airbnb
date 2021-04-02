import { ListingDetails } from '@components';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import places from '../../../assets/data/feed';
import { RootStackParamList } from '../../navigation/types';

const listing = places[0];

type ListingScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Listing'>;
  route: RouteProp<RootStackParamList, 'Listing'>;
};

const ListingScreen = ({ navigation, route }: ListingScreenProps) => {
  const listingId = route.params.listingId;
  console.log('listingId', listingId);
  return (
    <SafeAreaView>
      <ListingDetails listing={listing} />
    </SafeAreaView>
  );
};

export default ListingScreen;
