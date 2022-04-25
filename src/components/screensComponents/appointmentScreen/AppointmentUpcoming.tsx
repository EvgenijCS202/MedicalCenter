import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Appointment from '../../baseComponents/appointments/Appointment';
import AppointmentCard from '../../baseComponents/appointments/AppointmentCard';
import AppointmentSort from '../../baseComponents/appointments/AppointmentSort';
import {globalStyles} from '../../../constants/globalStyles';

const AppointmentUpcoming = async (
  setAppointments: any,
  navigation: any,
  renderScreen: any,
) => {
  const value = await AsyncStorage.getItem('@appointments');
  let allAppointments: Appointment[];
  if (value == null) allAppointments = [];
  else allAppointments = JSON.parse(value);
  let allAppointmentsFiltered = allAppointments.filter(
    value => value.status == 'confirmed',
  );
  allAppointmentsFiltered = AppointmentSort(allAppointmentsFiltered);
  const items = [];
  for (let i = 1; i < allAppointmentsFiltered.length; ++i)
    items.push(
      <AppointmentCard
        style={{marginBottom: 12}}
        appointment={allAppointmentsFiltered[i]}
        cancel={() => {
          allAppointments.map(item => {
            if (item == allAppointmentsFiltered[i]) item.status = 'canceled';
          });
          const value = JSON.stringify(allAppointments);
          AsyncStorage.setItem('@appointments', value);
          renderScreen();
        }}
        retry={() => {
          const data = new Appointment(allAppointmentsFiltered[i]);
          data.status = allAppointmentsFiltered[i].status;
          navigation.navigate('Date', {data: data, allAppointments});
        }}
        key={i}
      />,
    );
  let header = (
    <View>
      <Text style={[globalStyles.H3, {lineHeight: 22, marginBottom: 24}]}>
        Ближайшие записи
      </Text>
    </View>
  );
  if (allAppointmentsFiltered.length != 0)
    header = (
      <View>
        <Text style={[globalStyles.H3, {lineHeight: 22, marginBottom: 24}]}>
          Ближайшие записи
        </Text>
        <AppointmentCard
          style={{marginBottom: 36}}
          appointment={allAppointmentsFiltered[0]}
          cancel={() => {
            allAppointments.map(item => {
              if (item == allAppointmentsFiltered[0]) item.status = 'canceled';
            });
            const value = JSON.stringify(allAppointments);
            AsyncStorage.setItem('@appointments', value);
            renderScreen();
          }}
          retry={() => {
            const data = new Appointment(allAppointments[0]);
            data.status = allAppointments[0].status;
            navigation.navigate('Date', {data: data, allAppointments});
          }}
        />
      </View>
    );
  let footer = <View></View>;
  if (items.length != 0)
    footer = (
      <View>
        <Text style={[globalStyles.H3, {lineHeight: 22, marginBottom: 24}]}>
          Следующие записи
        </Text>
        {items}
      </View>
    );
  setAppointments(
    <ScrollView contentContainerStyle={styles.container}>
      {header}
      {footer}
    </ScrollView>,
  );
};

export default AppointmentUpcoming;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 36,
  },
});
