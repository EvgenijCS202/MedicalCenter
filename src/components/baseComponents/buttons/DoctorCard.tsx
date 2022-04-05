import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appointment from '../appointments/Appointment';
import Stars from '../Stars';
import {globalStyles} from '../../../constants/globalStyles';
interface IDoctorCard {
  doctor: Appointment;
  key: number;
  navigation: any;
}
const DoctorCard = ({doctor, key, navigation}: IDoctorCard) => {
  return (
    <Pressable style={styles.container} key={key} onPress={() => navigation.navigate('Doctor',{doctor})} >
      <Image source={doctor.image} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={[globalStyles.H4,{lineHeight: 22}]}>
            {doctor.doctorSurname} {doctor.doctorName} {doctor.doctorMiddleName}
          </Text>
          <Text style={[globalStyles.Captures,{lineHeight: 22}]}>{doctor.name}</Text>
        </View>
        <Stars
          sumRates={typeof doctor.sumRates === 'number' ? doctor.sumRates : 0}
          numRates={typeof doctor.numRates === 'number' ? doctor.numRates : 1}
        />
      </View>
    </Pressable>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  info: {
    marginVertical: 10,
    marginLeft: 5,
    justifyContent: 'space-evenly',
  },
});
