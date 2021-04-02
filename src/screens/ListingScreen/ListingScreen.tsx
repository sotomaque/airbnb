import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../navigation/types';

type ListingScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Listing'>;
  route: RouteProp<RootStackParamList, 'Listing'>;
};

const ListingScreen = ({ navigation, route }: ListingScreenProps) => {
  const listingId = route.params.listingId;
  console.log('listingId', listingId);
  return <SafeAreaView>{/* <ListingDetails listing={} /> */}</SafeAreaView>;
};

export default ListingScreen;
