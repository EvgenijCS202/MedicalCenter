import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import ProfileScreen from '../screens/profileScreens/ProfileScreen';
import IconsBottomTabNavigation from '../components/baseComponents/footer/IconsBottomTabNavigation';
import AppoitmentScreen from '../screens/appoitmentsScreens/appoitmentScreen';
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
          name="Appoitments"
          component={AppoitmentScreen}
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
          component={ProfileScreen}
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
