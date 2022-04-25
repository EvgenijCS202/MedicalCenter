import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appointment from '../../baseComponents/appointments/Appointment';
import {globalStyles} from '../../../constants/globalStyles';
import Icons from '../../../../assets/img/icons/icons';
import {twoSignNum} from '../../../constants';
import {
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  parseISO,
} from 'date-fns';
import {gray} from '../../../constants/colors';
interface IResultTitle {
  appointment: Appointment;
}
const ResultTitle = ({appointment}: IResultTitle) => {
  const name =
    appointment.type == 'service'
      ? appointment.name
      : appointment.doctorSurname +
        ' ' +
        appointment.doctorName?.charAt(0) +
        '. ' +
        appointment.doctorMiddleName?.charAt(0) +
        '.';
  const date = () =>
    appointment.date != undefined
      ? typeof appointment.date === 'string'
        ? parseISO(appointment.date)
        : appointment.date
      : new Date();
  return (
    <View style={{flexDirection: 'row', marginVertical: 36}}>
      <Image
        style={{width: 60, height: 60, marginHorizontal: 16}}
        source={appointment.image}
      />
      <View style={{justifyContent: 'space-between'}}>
        <Text
          style={[
            globalStyles.H2,
            {textAlignVertical: 'center', marginHorizontal: 10},
          ]}>
          {name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.footerItems}>
            <Icons name="calendar" size={25} style={{color: gray}} />
            <Text style={[globalStyles.H5, {lineHeight: 22, color: gray}]}>
              {twoSignNum(getDate(date()))}/{twoSignNum(getMonth(date()) + 1)}/
              {twoSignNum(getYear(date()) - 2000)}
            </Text>
          </View>
          <View style={[styles.footerItems, {marginLeft: 20}]}>
            <Icons name="time_sharp" size={25} style={{color: gray}} />
            <Text style={[globalStyles.H5, {lineHeight: 22, color: gray}]}>
              {twoSignNum(getHours(date()))}:{twoSignNum(getMinutes(date()))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResultTitle;

const styles = StyleSheet.create({
  footerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});
