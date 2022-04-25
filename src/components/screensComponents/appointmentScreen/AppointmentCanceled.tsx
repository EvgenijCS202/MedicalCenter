import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointment from '../../baseComponents/appointments/Appointment';
import AppointmentCard from '../../baseComponents/appointments/AppointmentCard';
import AppointmentSort from '../../baseComponents/appointments/AppointmentSort';
import {globalStyles} from '../../../constants/globalStyles';

const AppointmentCanceled = async (setAppointments: any, navigation: any) => {
  const value = await AsyncStorage.getItem('@appointments');
  let allAppointments: Appointment[];
  if (value == null) allAppointments = [];
  else allAppointments = JSON.parse(value);
  let allAppointmentsFiltered = allAppointments.filter(
    value => value.status == 'canceled',
  );
  allAppointmentsFiltered = AppointmentSort(allAppointmentsFiltered);
  const items = [];
  for (let i = 0; i < allAppointmentsFiltered.length; ++i)
    items.push(
      <AppointmentCard
        style={{marginBottom: 12}}
        appointment={allAppointmentsFiltered[i]}
        retry={() => {
          const data = new Appointment(allAppointmentsFiltered[i]);
          data.status = allAppointmentsFiltered[i].status;
          navigation.navigate('Date', {data: data, allAppointments});
        }}
        key={i}
      />,
    );
  if (items.length != 0)
    setAppointments(
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[globalStyles.H3, {lineHeight: 22, marginBottom: 24}]}>
          Отмененные записи
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
        Отмененные записи
      </Text>,
    );
};

export default AppointmentCanceled;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 36,
  },
});
