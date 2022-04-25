import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';
import {width} from '../../constants';
import {white} from '../../constants/colors';
import DescriptionCard from '../../components/baseComponents/buttons/DescriptionCard';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';
import Appointment from '../../components/baseComponents/appointments/Appointment';
import DateTitle from '../../components/screensComponents/dateScreen/DateTitle';
interface IServiceScreen {
  navigation: any;
  route: {
    params: {
      data: Appointment;
    };
  };
}
export default function ServiceScreen({navigation, route}: IServiceScreen) {
  return (
    <View style={{backgroundColor: white, height: '100%'}}>
      <View style={{flex: 1}}>
        <DateTitle data={route.params.data} />
        <Text style={[globalStyles.text, styles.description]}>
          {route.params.data.description}
        </Text>
        <View style={styles.descCards}>
          <DescriptionCard
            title="Длительность обследования"
            text={route.params.data.info1}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
          <DescriptionCard
            title="Подготовка заключения"
            text={route.params.data.info2}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
          <DescriptionCard
            title="Возраст"
            text={route.params.data.info3}
            size={{width: (width - 48) / 3, height: (width - 48) / 3}}
          />
        </View>
      </View>
      <SubmitButton
        text="Записаться на услугу"
        style={styles.button}
        onPress={() => navigation.navigate('Date', {data: route.params.data})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    color: '#7B8088',
    marginHorizontal: 16,
    textAlign: 'justify',
    lineHeight: 22,
  },
  descCards: {
    marginTop: 28,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
});
