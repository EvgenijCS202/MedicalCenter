import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appointment from '../appointments/Appointment';
import {globalStyles} from '../../../constants/globalStyles';
import Icons from '../../../../assets/img/icons/icons';
import {gray, white} from '../../../constants/colors';
import {getDate, getHours, getMinutes, getMonth, getYear} from 'date-fns';
import {twoSignNum} from '../../../constants';
interface IAppointmentCard {
  appointment: Appointment;
}
const AppointmentCard = ({appointment}: IAppointmentCard) => {
  const getName = () => {
    if (appointment.type === 'service') return appointment.name;
    else
      return (
        appointment.doctorSurname +
        ' ' +
        appointment.doctorName?.charAt(0) +
        '. ' +
        appointment.doctorMiddleName?.charAt(0) +
        '.'
      );
  };
  const date = () =>
    appointment.date != undefined ? appointment.date : new Date();
  const statusColor = () => {
    switch (appointment.status) {
      case 'confirmed':
        return '#04BB00';
      case 'outdated':
        return '#04BB00';
      default:
        return '#EF0E0E';
    }
  };
  const statusText = () => {
    switch (appointment.status) {
      case 'confirmed':
        return 'Подтверждено';
      case 'outdated':
        return 'Услуга оказана';
      case 'canceled':
        return 'Отмена';
      default:
        return 'Ошибка';
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={[globalStyles.H4, {lineHeight: 22}]}>{getName()}</Text>
          <Text style={[globalStyles.H5, {lineHeight: 22, fontWeight: '700'}]}>
            {appointment.price}₽
          </Text>
        </View>
        <Image
          source={appointment.image}
          style={{width: 44, height: 44, borderRadius: 10}}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.footer}>
        <View style={styles.footerItems}>
          <Icons name="calendar" size={25} style={{color: gray}} />
          <Text style={[globalStyles.H5, {lineHeight: 22, color: gray}]}>
            {twoSignNum(getDate(date()))}/{twoSignNum(getMonth(date()) + 1)}/
            {twoSignNum(getYear(date()) - 2000)}
          </Text>
        </View>
        <View style={styles.footerItems}>
          <Icons name="time_sharp" size={25} style={{color: gray}} />
          <Text style={[globalStyles.H5, {lineHeight: 22, color: gray}]}>
            {twoSignNum(getHours(date()))}:{twoSignNum(getMinutes(date()))}
          </Text>
        </View>
        <View style={styles.footerItems}>
          <View
            style={[styles.circle, {backgroundColor: statusColor()}]}></View>
          <Text
            style={[
              globalStyles.H5,
              {lineHeight: 22, color: gray, marginLeft: 10},
            ]}>
            {statusText()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    elevation: 2,
    backgroundColor: white,
    borderRadius: 20,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    marginTop: 17.5,
    marginBottom: 6.5,
    backgroundColor: '#DADADA',
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  footerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
