import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchInput from '../components/baseComponents/input/SearchInput';
import {globalStyles} from '../constants/globalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import AllServicesScrollCards from '../components/screensComponents/allServicesScreen/AllServicesScrollCards';
import {width} from '../constants';
const AllAreasScreen = ({navigation}: any) => {
  return (
    <View>
      <SearchInput
        style={{marginHorizontal: 16, marginVertical: 24}}
        text={'Поиск по направлениям'}
      />
      <Text style={[globalStyles.H1, {marginHorizontal: 17}]}>
        Все направления
      </Text>
      <ScrollView contentContainerStyle={styles.itemContainer}>
        {AllServicesScrollCards(navigation)}
      </ScrollView>
    </View>
  );
};

export default AllAreasScreen;
const styles = StyleSheet.create({
  itemContainer: {
    padding: (width - 320) / 3,
    paddingBottom: 130,
  },
});
