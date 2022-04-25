import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../constants/globalStyles';
import Appointment from '../../baseComponents/appointments/Appointment';
import Stars from '../../baseComponents/Stars';
interface IDateTitle {
  data: Appointment;
}
const DateTitle = ({data}: IDateTitle) => {
  if (data.type === 'service')
    return (
      <View style={{flexDirection: 'row', marginVertical: 24}}>
        <Image
          style={{width: 60, height: 60, marginHorizontal: 16}}
          source={data.image}
        />
        <Text
          style={[
            globalStyles.H2,
            {textAlignVertical: 'center', marginHorizontal: 10},
          ]}>
          {data.name}
        </Text>
      </View>
    );
  else
    return (
      <View style={{flexDirection: 'row', marginVertical: 24}}>
        <Image
          style={{width: 100, height: 100, marginHorizontal: 16}}
          source={data.image}
        />
        <View style={{justifyContent: 'center'}}>
          <Stars
            sumRates={
              typeof data.sumRates === 'number'
                ? data.sumRates
                : 0
            }
            numRates={
              typeof data.numRates === 'number'
                ? data.numRates
                : 1
            }
          />
          <Text style={globalStyles.H2}>
            {data.doctorSurname}{' '}
            {data.doctorName?.charAt(0)}.{' '}
            {data.doctorMiddleName?.charAt(0)}.
          </Text>
          <Text style={globalStyles.Captures}>{data.name}</Text>
        </View>
      </View>
    );
};

export default DateTitle;

const styles = StyleSheet.create({});
