import {StyleSheet, View} from 'react-native';
import React from 'react';
import {white} from '../../../constants/colors';
import ServiceCard from './ServiceCard';
import Appointment from '../appointments/Appointment';
interface IServiceCard {
  items: Appointment[];
  navigation: any;
}
const ServiceCards = ({items, navigation}: IServiceCard) => {
  let itemsView = [];
  for (let i = 0; i < items.length; ++i)
    itemsView.push(
      <ServiceCard item={items[i]} navigation={navigation} num={i} key={i} />,
    );
  return <View style={styles.container}>{itemsView}</View>;
};

export default ServiceCards;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 17,
    marginRight: 15,
  },
});
