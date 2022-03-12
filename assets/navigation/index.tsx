import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/WelcomeScreen';
import Registration from '../screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Registration" component={Registration} 
        options={({route}: any) => ({title: route.params.data.title}) }/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};