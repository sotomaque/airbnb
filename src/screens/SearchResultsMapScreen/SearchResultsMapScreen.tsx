import { Listing as ListingType } from '@api';
import { CustomMarker, ListingCarouselItem } from '@components';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, useWindowDimensions, View, ViewToken } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

type ViewableChangedPropsType = {
  viewableItems: ViewToken[];
};

type SearchResultsMapScreenPropType = {
  listings: ListingType[] | null;
};
const SearchResultsMapScreen = ({
  listings,
}: SearchResultsMapScreenPropType) => {
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
    if (!listings) return;
    // get index
    const index = listings.findIndex(
      (place: ListingType) => place.id === selectedPlaceId
    );
    if (index === -1) return;
    // update ref to scroll to index
    flatListRef?.current?.scrollToIndex({ index });

    // update map
    const selectedPlace = listings[index];
    const region = {
      latitude: selectedPlace?.latitude,
      longitude: selectedPlace?.longitude,
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
        {listings &&
          listings.map((place: ListingType) => (
            <CustomMarker
              key={place.id}
              coordinates={{
                latitude: place.latitude as number,
                longitude: place.longitude as number,
              }}
              price={place.currentPrice as number}
              isSelected={place.id === selectedPlaceId}
              onPress={() => setSelectedPlaceId(place.id as string)}
            />
          ))}
      </MapView>

      {/* Carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={listings}
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
