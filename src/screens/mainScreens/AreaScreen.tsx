import {StyleSheet, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../../components/baseComponents/input/SearchInput';
import AreaSearchTitle from '../../components/screensComponents/areaScreen/AreaSearchTitle';
import {globalStyles} from '../../constants/globalStyles';
import ServiceCards from '../../components/baseComponents/buttons/ServiceCards';
import {white} from '../../constants/colors';
import Appointment from '../../components/baseComponents/appointments/Appointment';
interface IAreaScreen {
  route: {
    params: {
      services: Appointment[];
      title: string;
    };
  };
  navigation: any;
}
const AreaScreen = ({route, navigation}: IAreaScreen) => {
  const [text, setText] = useState('');
  return (
    <ScrollView style={{backgroundColor: white}}>
      <SearchInput
        style={styles.search}
        text={'Поиск по ' + AreaSearchTitle(route.params.title)}
        onChange={setText}
      />
      <Text style={[globalStyles.H1, {marginHorizontal: 17}]}>Услуги</Text>
      {ServiceCards({
        items: route.params.services.filter(item => item.name.includes(text)),
        navigation,
      })}
    </ScrollView>
  );
};

export default AreaScreen;

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
