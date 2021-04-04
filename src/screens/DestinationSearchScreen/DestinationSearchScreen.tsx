import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { HomeParamList } from 'src/navigation/types';
import SuggestionRow from './components/SuggestionRow';
import styles from './styles';

type DestinationSearchScreenProps = {
  navigation: StackNavigationProp<HomeParamList, 'DestinationSearch'>;
};

const DestinationSearchScreen = ({
  navigation,
}: DestinationSearchScreenProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Input */}
        <GooglePlacesAutocomplete
          placeholder='Where are you going?'
          onPress={(data, details = null) => {
            navigation.navigate('GuestDetails', {
              viewport: details?.geometry.viewport,
            });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCc2S9XzrUb4Xtz1sGGGbgZWe-m-qcNZzU',
            language: 'en',
            types: '(cities)',
          }}
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
