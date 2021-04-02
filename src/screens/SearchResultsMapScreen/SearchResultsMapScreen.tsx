import { CustomMarker, ListingCarouselItem } from '@components';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, useWindowDimensions, View, ViewToken } from 'react-native';
import MapView from 'react-native-maps';
import places from '../../../assets/data/feed';
import { ListingType } from '../../components/Listing/Listing';
import styles from './styles';

type ViewableChangedPropsType = {
  viewableItems: ViewToken[];
};

const SearchResultsMapScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const flatListRef = useRef(null);
  const mapRef = useRef(null);
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });

  const onViewChanged = useRef(
    ({ viewableItems }: ViewableChangedPropsType) => {
      if (viewableItems.length > 0) {
        const selectedPlace = viewableItems[0].item;
        setSelectedPlaceId(selectedPlace.id);
      }
    }
  );
  const width = useWindowDimensions().width;

  useEffect(() => {
    if (setSelectedPlaceId === null || flatListRef === null) return;

    // get index
    const index = places.findIndex(
      (place: ListingType) => place.id === selectedPlaceId
    );
    // update ref to scroll to index
    flatListRef?.current?.scrollToIndex({ index });

    // update map
    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace?.coordinate.latitude,
      longitude: selectedPlace?.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current?.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View>
      <MapView
        ref={mapRef}
        provider='google'
        style={styles.map}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place: ListingType) => (
          <CustomMarker
            key={place.id}
            coordinates={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      {/* Carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={places}
          renderItem={({ item }) => <ListingCarouselItem listing={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment='center'
          decelerationRate='fast'
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMapScreen;
