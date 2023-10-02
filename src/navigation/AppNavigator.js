import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import TeamScreen from '../screens/TeamScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserListScreen">
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen name="TeamScreen" component={TeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
