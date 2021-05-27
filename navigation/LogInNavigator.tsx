import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { LogInParamList } from '../types';
import UsernameScreen from '../screens/LogIn/UsernameScreen';
import PasswordScreen from '../screens/LogIn/PasswordScreen';

const LogInStack = createStackNavigator<LogInParamList>();

export default function LogInNavigator() {
  return (
    <LogInStack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Username">
      <LogInStack.Screen
        name="Username"
        component={UsernameScreen}
      />
      <LogInStack.Screen
        name="Password"
        component={PasswordScreen}
      />
    </LogInStack.Navigator>
  );
}