import { Entypo } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { HomeParamList } from 'src/navigation/types';
import searchResults from '../../../assets/data/search';
import styles from './styles';

type DestinationSearchScreenProps = {
  navigation: StackNavigationProp<HomeParamList, 'DestinationSearch'>;
};

const DestinationSearchScreen = ({
  navigation,
}: DestinationSearchScreenProps) => {
  const [inputText, setInputText] = useState<string>('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Input */}
        <TextInput
          style={styles.textInput}
          placeholder='Where are you going?'
          value={inputText}
          onChangeText={text => setInputText(text)}
        />

        {/* Results List */}
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <Pressable
              style={styles.row}
              onPress={() => navigation.navigate('GuestDetails')}
            >
              <View style={styles.iconContainer}>
                <Entypo name='location-pin' size={30} color='black' />
              </View>
              <Text style={styles.locationLabel}>{item.description}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
