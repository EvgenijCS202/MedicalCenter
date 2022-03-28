import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AllServicesScreen from '../screens/AllServicesScreen';
import ServiceScreen from '../screens/ServiceScreen';
import BaseHeader from '../components/baseComponents/header/BaseHeader';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name='AllServices' component={AllServicesScreen} 
        options={{header: props => (<BaseHeader title={'Все услуги'} 
        props={props}/>)}}/>
        <Stack.Screen name="Service" component={ServiceScreen} 
        options={({route}: any) => ({title: route.params.data.title}) }/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};