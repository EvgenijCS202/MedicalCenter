import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profileScreens/ProfileScreen';
import ProfileEditScreen from '../screens/profileScreens/ProfileEditScreen';
import BaseHeader from '../components/baseComponents/header/BaseHeader';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{
          header: props => <BaseHeader title={'Профиль'} props={props} />,
        }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEditScreen}
        options={{
          header: props => (
            <BaseHeader title={'Изменение профиля'} props={props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;

const styles = StyleSheet.create({});
