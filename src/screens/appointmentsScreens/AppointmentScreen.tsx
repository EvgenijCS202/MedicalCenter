import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../constants/globalStyles';
import AppointmentNavigationItem from '../../components/screensComponents/appointmentScreen/AppointmentNavigationItem';
import AppointmentUpcoming from '../../components/screensComponents/appointmentScreen/AppointmentUpcoming';
import {white} from '../../constants/colors';
import {useIsFocused} from '@react-navigation/native';
import AppointmentCanceled from '../../components/screensComponents/appointmentScreen/AppointmentCanceled';
import AppointmentOutdated from '../../components/screensComponents/appointmentScreen/AppointmentOutdated';

const AppointmentScreen = ({navigation}: any) => {
  const [state, setState] = useState(0);
  const arr: JSX.Element[] = [];
  const [appointments, setAppointments] = useState(arr);
  const isFocused = useIsFocused();
  const renderScreen = () => {
    switch (state) {
      case 0:
        AppointmentUpcoming(setAppointments, navigation, renderScreen);
        break;
      case 1:
        AppointmentOutdated(setAppointments);
        break;
      case 2:
        AppointmentCanceled(setAppointments, navigation);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    renderScreen();
  }, [state, isFocused]);
  return (
    <View style={{backgroundColor: white, height: '100%'}}>
      <Text style={[globalStyles.H1, styles.title]}>Записи</Text>
      <View style={styles.navigation}>
        <AppointmentNavigationItem
          text="Предстоящие"
          fixedState={0}
          state={state}
          setState={setState}
        />
        <View style={styles.spacing} />
        <AppointmentNavigationItem
          text="Прошедшие"
          fixedState={1}
          state={state}
          setState={setState}
        />
        <View style={styles.spacing} />
        <AppointmentNavigationItem
          text="Отмененные"
          fixedState={2}
          state={state}
          setState={setState}
        />
      </View>
      {appointments}
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  title: {
    lineHeight: 38.25,
    marginHorizontal: 17,
    marginTop: 30,
  },
  navigation: {
    marginHorizontal: 16,
    marginTop: 30,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    height: 50,
    borderRadius: 8.91,
    flexDirection: 'row',
    padding: 2,
  },
  spacing: {
    flex: 0.0065,
    height: 26.28,
    alignSelf: 'center',
    backgroundColor: 'rgba(60, 60, 67, 0.36)',
  },
});
