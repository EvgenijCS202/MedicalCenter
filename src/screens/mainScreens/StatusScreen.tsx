import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StatusTitle from '../../components/screensComponents/statusScreen/StatusTitle';
import ExtraActionButton from '../../components/baseComponents/buttons/ExtraActionButton';
import {globalStyles} from '../../constants/globalStyles';
import {white} from '../../constants/colors';
import Appointment from '../../components/baseComponents/appointments/Appointment';
import AppointmentCard from '../../components/baseComponents/appointments/AppointmentCard';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface IStatusScreen {
  route: {
    params: {
      color: string;
      appointment: Appointment;
      allAppointments: Appointment[];
    };
  };
  navigation: any;
}
const StatusScreen = ({route, navigation}: IStatusScreen) => {
  const appointment = new Appointment(route.params.appointment);
  appointment.status =
    route.params.color === '#32C000' ? 'confirmed' : 'canceled';
  const allAppointments = route.params.allAppointments;
  for (let i = 0; i < allAppointments.length; ++i)
    if (
      allAppointments[i].name == appointment.name &&
      allAppointments[i].date == appointment.date
    ) {
      allAppointments[i].status = appointment.status;
      break;
    }
  if (appointment.status == 'canceled') allAppointments.push(appointment);
  const value = JSON.stringify(allAppointments);
  AsyncStorage.setItem('@appointments', value);
  return (
    <View style={{backgroundColor: white, height: '100%'}}>
      <View style={{flex: 1}}>
        <StatusTitle color={route.params.color} />
        <View style={styles.extraButtons}>
          <ExtraActionButton iconName="map" description="Как добраться" />
          <ExtraActionButton iconName="phone_outline" description="Позвонить" />
        </View>
        <Text style={[globalStyles.H3, styles.info]}>Информация о записи</Text>
        <AppointmentCard
          style={{marginHorizontal: 16}}
          appointment={appointment}
        />
      </View>
      <SubmitButton
        text={
          appointment.status === 'confirmed'
            ? 'Посмотреть все записи'
            : 'Попробовать ещё раз'
        }
        onPress={
          appointment.status === 'confirmed'
            ? () => navigation.navigate('Appointments')
            : () => navigation.goBack()
        }
        style={styles.button}
      />
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  extraButtons: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 37,
    justifyContent: 'space-between',
    width: 170,
  },
  info: {
    marginHorizontal: 16,
    marginTop: 34,
    marginBottom: 24,
  },
  button: {
    marginBottom: 38,
    marginHorizontal: 16,
  },
});
