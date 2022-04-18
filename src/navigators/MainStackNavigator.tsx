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
import StatusScreen from '../screens/mainScreens/StatusScreen';
import ResultScreen from '../screens/mainScreens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator({navigation}: any) {
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
      <Stack.Screen
        name="AllDoctors"
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
      <Stack.Screen
        name="Status"
        component={StatusScreen}
        options={{
          header: (props: any) => (
            <BaseHeader
              title="Запись"
              props={props}
              color={props.route.params.color}
              onPress={props.route.params.onPress}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{
          header: props => (
            <BaseHeader
              title="Результат"
              props={props}
              onPress={() => navigation.navigate('Home')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
