import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../constants/globalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import HomeAreasList from './HomeAreasList';
import ServiceAreaCard from '../../baseComponents/buttons/ServiceAreaCard';
import HomeDoctorRender from './HomeDoctorRender';
import HomeServicesList from './HomeServicesList';
import Appointment from '../../baseComponents/appointments/Appointment';
import HomeDoctorsList from './HomeDoctorsList';
import ServiceCard from '../../baseComponents/buttons/ServiceCard';
import DoctorCard from '../../baseComponents/buttons/DoctorCard';
interface IHomeFooter {
  navigation: any;
  text: string;
}
const HomeFooter = ({navigation, text}: IHomeFooter) => {
  const search = (text: string) => {
    let array = HomeServicesList('cardio').filter((appointment: Appointment) =>
      appointment.name.includes(text),
    );
    array = array.concat(
      HomeServicesList('dentist').filter((appointment: Appointment) =>
        appointment.name.includes(text),
      ),
    );
    array = array.concat(
      HomeServicesList('analyses').filter((appointment: Appointment) =>
        appointment.name.includes(text),
      ),
    );
    array = array.concat(
      HomeDoctorsList().filter(
        (appointment: Appointment) =>
          appointment.doctorName?.includes(text) ||
          appointment.doctorSurname?.includes(text) ||
          appointment.doctorMiddleName?.includes(text) ||
          appointment.name.includes(text),
      ),
    );
    return array;
  };
  const renderAppointments = (appointments: Appointment[]) => {
    const items = [];
    for (let i = 0; i < appointments.length; ++i)
      if (appointments[i].type === 'service')
        items.push(
          <ServiceCard
            item={appointments[i]}
            navigation={navigation}
            key={i}
            num={i}
          />,
        );
      else
        items.push(
          <DoctorCard
            doctor={appointments[i]}
            navigation={navigation}
            key={i}
            num={i}
          />,
        );
    return items;
  };
  if (text === '')
    return (
      <View>
        <View style={[styles.Links, {marginTop: 36}]}>
          <Text style={globalStyles.H3}>Самые популярные</Text>
          <Pressable onPress={() => navigation.navigate('AllAreas')}>
            <Text style={[globalStyles.Links]}>Все услуги</Text>
          </Pressable>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.serviceAreas}>
          {HomeAreasList(navigation).map(ServiceAreaCard)}
        </ScrollView>
        <View style={[styles.Links]}>
          <Text style={globalStyles.H3}>Топ докторов</Text>
          <Pressable onPress={() => navigation.navigate('AllDoctors')}>
            <Text style={[globalStyles.Links]}>Все доктора</Text>
          </Pressable>
        </View>
        <View style={styles.doctors}>{HomeDoctorRender({navigation,text:''})}</View>
      </View>
    );
  else {
    const result = (
      <View style={styles.container}>{renderAppointments(search(text))}</View>
    );
    return result;
  }
};

export default HomeFooter;

const styles = StyleSheet.create({
  Links: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceAreas: {
    paddingHorizontal: 17,
    marginVertical: 24,
    paddingBottom: 10,
  },
  doctors: {
    marginLeft: 17,
    marginRight: 15,
    marginTop: 24,
  },
  container: {
    marginTop: 24,
    marginLeft: 17,
    marginRight: 15,
  },
});
