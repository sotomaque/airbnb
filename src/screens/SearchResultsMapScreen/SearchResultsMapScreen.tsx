import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const SearchResultsMapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

export default SearchResultsMapScreen;
