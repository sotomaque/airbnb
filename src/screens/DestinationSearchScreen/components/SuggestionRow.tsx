import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlaceData } from 'react-native-google-places-autocomplete/GooglePlacesAutocomplete';
import styles from './styles';

type SuggestionRowPropsType = {
  item: GooglePlaceData;
};

const SuggestionRow = ({ item }: SuggestionRowPropsType) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={30} color='black' />
      </View>
      <Text style={styles.locationLabel}>{item.description}</Text>
    </View>
  );
};

export default SuggestionRow;
