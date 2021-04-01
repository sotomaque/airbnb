import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DestinationSearchScreen, GuestDetailsScreen } from '@screens';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import HomeTabNavigator from './HomeTabNavigator';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='DestinationSearch'
        component={DestinationSearchScreen}
        options={{
          title: 'Search your destination',
        }}
      />
      <Stack.Screen
        name='GuestDetails'
        component={GuestDetailsScreen}
        options={{
          title: 'How many people?',
        }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
