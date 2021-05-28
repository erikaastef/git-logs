/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import LogInNavigator from './LogInNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import ErrorScreen from '../screens/ErrorScreen';
import RepositoryScreen from '../screens/RepositoryScreen';


export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LogIn" component={LogInNavigator} />
      <Stack.Screen name="Repository" component={RepositoryScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
