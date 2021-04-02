import { CustomMarker, ListingCarouselItem } from '@components';
import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import places from '../../../assets/data/feed';
import styles from './styles';

const SearchResultsMapScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  return (
    <View>
      <MapView
        provider='google'
        style={styles.map}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map(place => (
          <CustomMarker
            key={place.id}
            coordinates={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      {/* Listng Carousel */}
      <View style={styles.carouselContainer}>
        <ListingCarouselItem listing={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMapScreen;
