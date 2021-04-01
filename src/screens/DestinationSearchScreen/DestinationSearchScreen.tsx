import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';
import searchResults from '../../../assets/data/search';
import styles from './styles';

const DestinationSearchScreen = () => {
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
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name='location-pin' size={30} color='black' />
              </View>
              <Text style={styles.locationLabel}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
