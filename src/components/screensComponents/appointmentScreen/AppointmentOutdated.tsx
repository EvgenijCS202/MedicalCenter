import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointment from '../../baseComponents/appointments/Appointment';
import AppointmentCard from '../../baseComponents/appointments/AppointmentCard';
import AppointmentSort from '../../baseComponents/appointments/AppointmentSort';
import {globalStyles} from '../../../constants/globalStyles';

const AppointmentOutdated = async (setAppointments: any) => {
  const value = await AsyncStorage.getItem('@appointments');
  let allAppointments: Appointment[];
  if (value == null) allAppointments = [];
  else allAppointments = JSON.parse(value);
  allAppointments = allAppointments.filter(value => value.status == 'outdated');
  allAppointments = AppointmentSort(allAppointments);
  const items = [];
  for (let i = 0; i < allAppointments.length; ++i)
    items.push(
      <AppointmentCard
        style={{marginBottom: 12}}
        appointment={allAppointments[i]}
        key={i}
      />,
    );
  if (items.length != 0)
    setAppointments(
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[globalStyles.H3, {lineHeight: 22, marginBottom: 24}]}>
          Прошедшие записи
        </Text>
        {items}
      </ScrollView>,
    );
  else
    setAppointments(
      <Text
        style={[
          globalStyles.H3,
          {
            lineHeight: 22,
            marginBottom: 24,
            marginHorizontal: 16,
            marginTop: 36,
          },
        ]}>
        Прошедшие записи
      </Text>,
    );
};

export default AppointmentOutdated;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 36,
  },
});
