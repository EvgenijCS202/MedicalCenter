import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/mainScreens/HomeScreen';
import AllAreasScreen from '../screens/mainScreens/AllAreasScreen';
import AreaScreen from '../screens/mainScreens/AreaScreen';
import ServiceScreen from '../screens/mainScreens/ServiceScreen';
import BaseHeader from '../components/baseComponents/header/BaseHeader';
import DateScreen from '../screens/mainScreens/DateScreen';
import AllDoctorsScreen from '../screens/mainScreens/AllDoctorsScreen';
import DoctorScreen from '../screens/mainScreens/DoctorScreen';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllAreas"
        component={AllAreasScreen}
        options={{
          header: props => <BaseHeader title={'Все услуги'} props={props} />,
        }}
      />
      <Stack.Screen
        name="Area"
        component={AreaScreen}
        options={{
          header: (props: any) => (
            <BaseHeader title={props.route.params.title} props={props} />
          ),
        }}
      />
      <Stack.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          header: props => <BaseHeader title="Услуга" props={props} />,
        }}
      />
      <Stack.Screen name="AllDoctors"
        component={AllDoctorsScreen}
        options={{
          header: props => <BaseHeader title={'Все врачи'} props={props} />,
        }}
      />
      <Stack.Screen
        name="Doctor"
        component={DoctorScreen}
        options={{
          header: props => <BaseHeader title="Врач" props={props} />,
        }}
      />
      <Stack.Screen
        name="Date"
        component={DateScreen}
        options={{
          header: props => <BaseHeader title="Запись" props={props} />,
        }}
      />
    </Stack.Navigator>
  );
}
