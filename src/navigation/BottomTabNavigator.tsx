import Colors from '@constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '@hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DestinationSearchScreen,
  GuestDetailsScreen,
  HomeScreen,
  SearchResultsScreen,
} from '@screens';
import * as React from 'react';
import { BottomTabParamList, HomeParamList, SearchParamList } from './types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName='GuestDetailsScreen'
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
      <HomeStack.Screen
        name='DestinationSearchScreen'
        component={DestinationSearchScreen}
      />
      <HomeStack.Screen
        name='GuestDetailsScreen'
        component={GuestDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchResultsScreen'
        component={SearchResultsScreen}
      />
    </SearchStack.Navigator>
  );
}
