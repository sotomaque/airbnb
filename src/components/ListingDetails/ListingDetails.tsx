import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import styles from './styles';

export type ListingType = {
  id: string;
  image: string;
  type: string;
  title: string;
  description: string;
  bathroom: number;
  bedroom: number;
  oldPrice: number;
  newPrice: number;
  totalPrice: number;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};

type ListingProps = {
  listing: ListingType;
};

const ListingDetails = ({ listing }: ListingProps) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Listing Image */}
      <Image
        style={styles.image}
        source={{
          uri: `${listing.image}`,
        }}
      />

      {/* Details - Text */}
      <Text style={styles.detailsLabel}>
        {listing.bedroom} bed ~ {listing.bathroom} beth
      </Text>

      {/* Type & Description - Text */}
      <Text style={styles.descriptionLabel} numberOfLines={2}>
        {listing.description}
      </Text>

      {/* Price Details (old / new) - Text */}
      <Text style={styles.pricesLabel}>
        <Text style={styles.oldPriceLabel}>${listing.oldPrice}</Text>
        <Text style={styles.newPriceLabel}> ${listing.newPrice}</Text>/ night
      </Text>

      {/* Total Price - Text */}
      <Text style={styles.totalPriceLabel}>${listing.totalPrice} total</Text>

      {/* Full Description */}
      <Text style={styles.longDescription}>{listing.description}</Text>
    </ScrollView>
  );
};

export default ListingDetails;
