import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AllAreasScreen from '../screens/AllAreasScreen';
import AreaScreen from '../screens/AreaScreen';
import ServiceScreen from '../screens/ServiceScreen';
import BaseHeader from '../components/baseComponents/header/BaseHeader';
import DateScreen from '../screens/DateScreen';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="AllAreas" component={AllAreasScreen} 
        options={{header: (props) => (<BaseHeader title={'Все услуги'} 
        props={props}/>)}}/>
        <Stack.Screen name="Area" component={AreaScreen}
        options={{header: (props: any) => (<BaseHeader title={props.route.params.title} 
        props={props}/>)}}/>
        <Stack.Screen name="Service" component={ServiceScreen} 
        options={{header: (props) => (<BaseHeader title='Услуга'
        props={props}/>)}}/>
        <Stack.Screen name="Date" component={DateScreen}
        options={{header: (props) => (<BaseHeader title='Запись'
        props={props}/>)}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};