import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import SearchInput from '../../components/baseComponents/input/SearchInput';
import {globalStyles} from '../../constants/globalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import AllServicesScrollCards from '../../components/screensComponents/allServicesScreen/AllServicesScrollCards';
import {width} from '../../constants';
import {white} from '../../constants/colors';
const AllAreasScreen = ({navigation}: any) => {
  const [text,setText]=useState('')
  return (
    <ScrollView style={{backgroundColor: white}}>
      <SearchInput
        style={{marginHorizontal: 16, marginVertical: 24}}
        text={'Поиск по направлениям'} onChange={setText}
      />
      <Text style={[globalStyles.H1, {marginHorizontal: 17}]}>
        Все направления
      </Text>
      <View style={styles.itemContainer}>
        {AllServicesScrollCards(navigation, text)}
      </View>
    </ScrollView>
  );
};

export default AllAreasScreen;
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: (width - 320) / 3,
    marginTop: 24,
  },
});
