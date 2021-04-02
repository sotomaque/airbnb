import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
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

const ListingCarouselItem = ({ listing }: ListingProps) => {
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        {/* Listing Image */}
        <Image
          style={styles.image}
          source={{
            uri: `${listing.image}`,
          }}
        />
        <View style={styles.contentContainer}>
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
            <Text style={styles.newPriceLabel}>${listing.newPrice}</Text> /
            night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListingCarouselItem;
