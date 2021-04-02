import { Listing as ListingType } from '@api';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import styles from './styles';

type ListingProps = {
  listing: ListingType;
};

const days = 7;

const Listing = ({ listing }: ListingProps) => {
  const naigation = useNavigation();

  return (
    <Pressable
      onPress={() => naigation.navigate('Listing', { listingId: listing.id })}
      style={styles.container}
    >
      {/* Listing Image */}
      <Image
        style={styles.image}
        source={{
          uri: `${listing.image}`,
        }}
      />

      {/* Details - Text */}
      <Text style={styles.detailsLabel}>
        {listing.bed} bed ~ {listing.bath} bath
      </Text>

      {/* Type & Description - Text */}
      <Text style={styles.descriptionLabel} numberOfLines={2}>
        {listing.description}
      </Text>

      {/* Price Details (old / new) - Text */}
      <Text style={styles.pricesLabel}>
        <Text style={styles.oldPriceLabel}>${listing.oldPrice}</Text>
        <Text style={styles.newPriceLabel}> ${listing.currentPrice}</Text>/
        night
      </Text>

      {/* Total Price - Text */}
      <Text style={styles.totalPriceLabel}>
        ${listing.currentPrice * days} total
      </Text>
    </Pressable>
  );
};

export default Listing;
