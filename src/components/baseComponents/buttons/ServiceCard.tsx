import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appointment from '../appointments/Appointment';
import {white} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface IServiceCard {
  item: Appointment;
  navigation: any;
  num: number;
}
const ServiceCard = ({navigation, item, num}: IServiceCard) => {
  return (
    <Pressable
      style={styles.itemContainer}
      key={num}
      onPress={() => navigation.navigate('Service', {data: item})}>
      <Image style={{margin: 10}} source={item.image} />
      <View style={{flex: 1, margin: 10, justifyContent: 'space-between'}}>
        <View>
          <Text style={[globalStyles.H4, {marginTop: 12}]}>{item.name}</Text>
          <Text style={globalStyles.Captures}>{item.info1}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[globalStyles.smallText, {fontWeight: '700'}]}>
            {item.price}₽
          </Text>
          <Text style={[globalStyles.Links, {fontSize: 12}]}>Подробнее</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: white,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 2,
  },
});
