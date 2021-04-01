import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

const GuestDetailsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Adults */}
        <View style={styles.guestRow}>
          <View>
            <Text style={styles.guestTypeLabel}>Adults</Text>
            <Text style={styles.guestTypeDescription}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonRow}>
            <Pressable
              onPress={() => {
                adults > 0 ? setAdults(prev => prev - 1) : null;
              }}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>-</Text>
            </Pressable>
            <Text style={styles.guestCount}>{adults}</Text>
            <Pressable
              onPress={() => {
                setAdults(prev => prev + 1);
              }}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Children */}
        <View style={styles.guestRow}>
          <View>
            <Text style={styles.guestTypeLabel}>Children</Text>
            <Text style={styles.guestTypeDescription}>Ages 2 - 12</Text>
          </View>
          <View style={styles.buttonRow}>
            <Pressable
              onPress={() => {
                children > 0 ? setChildren(prev => prev - 1) : null;
              }}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>-</Text>
            </Pressable>
            <Text style={styles.guestCount}>{children}</Text>
            <Pressable
              onPress={() => {
                setChildren(prev => prev + 1);
              }}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Infants */}
        <View style={styles.guestRow}>
          <View>
            <Text style={styles.guestTypeLabel}>Infants</Text>
            <Text style={styles.guestTypeDescription}>Under 2</Text>
          </View>
          <View style={styles.buttonRow}>
            <Pressable
              onPress={() => {
                infants > 0 ? setInfants(prev => prev - 1) : null;
              }}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>-</Text>
            </Pressable>
            <Text style={styles.guestCount}>{infants}</Text>
            <Pressable
              onPress={() => {
                setInfants(prev => prev + 1);
              }}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GuestDetailsScreen;
