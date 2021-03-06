import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appointment from '../../components/baseComponents/appointments/Appointment';
import {white} from '../../constants/colors';
import {globalStyles} from '../../constants/globalStyles';
import DescriptionCard from '../../components/baseComponents/buttons/DescriptionCard';
import {width} from '../../constants';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';
import Stars from '../../components/baseComponents/Stars';
import DateTitle from '../../components/screensComponents/dateScreen/DateTitle';
interface IDoctorScreen {
  route: {
    params: {
      doctor: Appointment;
    };
  };
  navigation: any;
}
const DoctorScreen = ({route, navigation}: IDoctorScreen) => {
  return (
    <View style={{backgroundColor: white, height: '100%'}}>
      <View style={{flex: 1}}>
        <DateTitle data={route.params.doctor} />
        <Text style={[globalStyles.text, styles.description]}>
          {route.params.doctor.description}
        </Text>
        <Text style={[globalStyles.H4, styles.price]}>
          Стоимость приёма:{' '}
          <Text style={{fontWeight: '700'}}>{route.params.doctor.price}₽</Text>
        </Text>
        <View style={styles.descCards}>
          <DescriptionCard
            title="Врачебный стаж"
            text={route.params.doctor.info1}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
          <DescriptionCard
            title="Довольных пациентов"
            text={route.params.doctor.info2}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
          <DescriptionCard
            title="Работа в стационаре"
            text={route.params.doctor.info3}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
        </View>
      </View>
      <SubmitButton
        text="Записаться к врачу"
        style={styles.button}
        onPress={() => navigation.navigate('Date', {data: route.params.doctor})}
      />
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  description: {
    color: '#7B8088',
    marginHorizontal: 16,
    textAlign: 'justify',
    lineHeight: 22,
  },
  price: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  descCards: {
    marginTop: 24,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
});
