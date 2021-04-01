import { Listing } from '@components';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Pressable, ScrollView, Text } from 'react-native';
import { HomeParamList } from 'src/navigation/types';
import styles from './styles';

type HomeScreenProps = {
  navigation: StackNavigationProp<HomeParamList, 'HomeScreen'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <ScrollView>
      {/* Search bar */}
      <Pressable style={styles.searchBar} onPress={() => console.warn('hi')}>
        <Ionicons name='ios-search-outline' size={24} color='#f15454' />
        <Text style={styles.searchLabel}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpeg')}
        style={styles.backgroundImage}
      >
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => console.warn('hi')}>
          <Text style={styles.buttonLabel}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>

      <Listing />
    </ScrollView>
  );
};

export default HomeScreen;
