import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Listing = () => {
  return (
    <View style={styles.container}>
      {/* Listing Image */}
      <Image
        style={styles.image}
        source={{
          uri: `https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg`,
        }}
      />

      {/* Details - Text */}
      <Text style={styles.detailsLabel}>1 bedroom 1 bath</Text>

      {/* Type & Description - Text */}
      <Text style={styles.descriptionLabel} numberOfLines={2}>
        Entire Flat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ad dolore voluptas est eligendi, rerum iusto amet debitis voluptatum
        voluptatibus eos. At atque harum alias similique ullam. Exercitationem
        at velit id!
      </Text>

      {/* Price Details (old / new) - Text */}
      <Text style={styles.pricesLabel}>
        <Text style={styles.oldPriceLabel}>$36</Text>
        <Text style={styles.newPriceLabel}> $30</Text>/ night
      </Text>

      {/* Total Price - Text */}
      <Text style={styles.totalPriceLabel}>$230 total</Text>
    </View>
  );
};

export default Listing;
