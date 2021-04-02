import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import styles from './styles';

type CustomMarkerProps = {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  price: number;
  isSelected: boolean;
  onPress: () => void;
};

const CustomMarker = ({
  coordinates,
  isSelected,
  onPress,
  price,
}: CustomMarkerProps) => {
  return (
    <Marker coordinate={coordinates} onPress={onPress}>
      <View
        style={[
          styles.markerBackground,
          { backgroundColor: isSelected ? 'black' : 'white' },
        ]}
      >
        <Text
          style={[
            styles.markerLabel,
            {
              color: isSelected ? 'white' : 'black',
            },
          ]}
        >
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
