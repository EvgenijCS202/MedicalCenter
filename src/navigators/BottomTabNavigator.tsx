import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import IconsBottomTabNavigation from '../components/baseComponents/footer/IconsBottomTabNavigation';
import AppointmentScreen from '../screens/appointmentsScreens/AppointmentScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Main"
          component={MainStackNavigator}
          options={{
            tabBarIcon: ({focused}) =>
              IconsBottomTabNavigation({
                focused,
                iconName: 'home_outline',
                text: 'Главная',
              }),
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={AppointmentScreen}
          options={{
            tabBarIcon: ({focused}) =>
              IconsBottomTabNavigation({
                focused,
                iconName: 'list_checklist_alt',
                text: 'Записи',
              }),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({focused}) =>
              IconsBottomTabNavigation({
                focused,
                iconName: 'user_circle',
                text: 'Профиль',
              }),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
