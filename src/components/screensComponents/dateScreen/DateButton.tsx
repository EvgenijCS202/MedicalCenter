import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubmitButton from '../../baseComponents/buttons/SubmitButton';
import Appointment from '../../baseComponents/appointments/Appointment';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface IDateButton {
  navigation: any;
  data: Appointment;
  timeSel: Date;
  allAppointmentsOld?: Appointment[];
}
const DateButton = ({
  navigation,
  data,
  timeSel,
  allAppointmentsOld,
}: IDateButton) => {
  const goToStatus = (
    color: string,
    appointment: Appointment,
    allAppointments: Appointment[],
  ) =>
    navigation.navigate('Status', {
      color: color,
      appointment,
      allAppointments,
      onPress: () => navigation.navigate('Home'),
    });
  return (
    <SubmitButton
      text="Записаться"
      onPress={async () => {
        const appointment = new Appointment(data);
        appointment.status = data.status;
        appointment.date = timeSel;
        const value = await AsyncStorage.getItem('@appointments', error => {
          if (error != null) {
            goToStatus('#EC7A76', appointment, []);
            return;
          }
        });
        let allAppointments: Appointment[];
        if (allAppointmentsOld != undefined)
          allAppointments = allAppointmentsOld;
        else {
          if (value == null) allAppointments = [];
          else allAppointments = JSON.parse(value);
        }
        const checkAppointment = new Appointment(appointment);
        checkAppointment.status = 'confirmed';
        if (
          value?.includes(JSON.stringify(checkAppointment)) &&
          value != null
        ) {
          goToStatus('#EC7A76', appointment, allAppointments);
          return;
        }
        if (allAppointmentsOld != undefined) {
          console.log(allAppointments)
          console.log(data)
          for (let i = 0; i < allAppointments.length; ++i)
            if (
              allAppointments[i].name == data.name &&
              allAppointments[i].date == data.date &&
              allAppointments[i].status == data.status
            ) {
              console.log('Here')
              allAppointments[i].date = appointment.date;
              break;
            }
        } else allAppointments.push(appointment);
        try {
          // console.log(allAppointments);
          const value = JSON.stringify(allAppointments);
          // throw Error;
          await AsyncStorage.setItem('@appointments', value, error => {
            if (error != null) {
              goToStatus('#EC7A76', appointment, allAppointments);
              return;
            }
          });
        } catch (error) {
          goToStatus('#EC7A76', appointment, allAppointments);
          return;
        }
        goToStatus('#32C000', appointment, allAppointments);
      }}
      style={styles.button}
    />
  );
};

export default DateButton;

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
});
