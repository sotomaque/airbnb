import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
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

const navigatorOptions: StackNavigationOptions = {
  headerTitleStyle: {
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontSize: 14,
  },
};

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
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
          headerBackTitleVisible: false,
          headerTintColor: '#ff5a60',
          headerTitleStyle: { color: 'black' },
        }}
      />
      <Stack.Screen
        name='GuestDetails'
        component={GuestDetailsScreen}
        options={{
          title: 'How many people?',
          headerBackTitleVisible: false,
          headerTintColor: '#ff5a60',
          headerTitleStyle: { color: 'black' },
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
