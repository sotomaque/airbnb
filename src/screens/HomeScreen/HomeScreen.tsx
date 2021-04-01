import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Pressable, ScrollView, Text } from 'react-native';
import { HomeParamList } from 'src/navigation/types';
import wallpaper from '../../../assets/images/wallpaper.jpeg';
import styles from './styles';

type HomeScreenProps = {
  navigation: StackNavigationProp<HomeParamList, 'Home'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Search bar */}
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate('DestinationSearch')}
      >
        <Ionicons name='ios-search-outline' size={24} color='#f15454' />
        <Text style={styles.searchLabel}>Where are you going?</Text>
      </Pressable>

      <ImageBackground source={wallpaper} style={styles.backgroundImage}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => console.warn('hi')}>
          <Text style={styles.buttonLabel}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;
