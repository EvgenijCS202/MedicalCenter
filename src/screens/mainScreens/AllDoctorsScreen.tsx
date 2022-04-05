import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {white} from '../../constants/colors';
import SearchInput from '../../components/baseComponents/input/SearchInput';
import {globalStyles} from '../../constants/globalStyles';
import HomeDoctorRender from '../../components/screensComponents/homeScreen/HomeDoctorRender';

const AllDoctorsScreen = ({navigation}: any) => {
  return (
    <ScrollView style={{backgroundColor: white}}>
      <SearchInput
        style={{marginHorizontal: 16, marginVertical: 24}}
        text={'Поиск по врачам'}
      />
      <Text style={[globalStyles.H1, {marginHorizontal: 17}]}>Врачи</Text>
      <View style={styles.doctors}>{HomeDoctorRender({navigation})}</View>
    </ScrollView>
  );
};

export default AllDoctorsScreen;

const styles = StyleSheet.create({
  doctors: {
    marginLeft: 17,
    marginRight: 15,
    marginTop: 24,
  },
});
