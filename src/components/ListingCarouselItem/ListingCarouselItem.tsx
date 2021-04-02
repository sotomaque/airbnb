import { Listing as ListingType } from '@api';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './styles';

type ListingProps = {
  listing: ListingType;
};

const ListingCarouselItem = ({ listing }: ListingProps) => {
  const width = useWindowDimensions().width;
  const naigation = useNavigation();

  return (
    <Pressable
      style={[styles.container, { width: width - 60 }]}
      onPress={() => naigation.navigate('Listing', { listingId: listing.id })}
    >
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
            {listing.bed} bed ~ {listing.bath} bath
          </Text>

          {/* Type & Description - Text */}
          <Text style={styles.descriptionLabel} numberOfLines={2}>
            {listing.description}
          </Text>

          {/* Price Details (old / new) - Text */}
          <Text style={styles.pricesLabel}>
            <Text style={styles.newPriceLabel}>${listing.currentPrice}</Text> /
            night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ListingCarouselItem;
