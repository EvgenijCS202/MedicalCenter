import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {white} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface IServiceCard {
  items: {
    name: string;
    description: String;
    image: any;
    info1: string;
    info2: string;
    info3: string;
    price: number;
  }[];
  navigation: any;
}
const ServiceCards = ({items, navigation}: IServiceCard) => {
  let itemsView = [];
  for (let i = 0; i < items.length; ++i)
    itemsView.push(
      <Pressable
        style={styles.itemContainer}
        key={i}
        onPress={() => navigation.navigate('Service', {data: items[i]})}>
        <Image style={{margin: 10}} source={items[i].image} />
        <View style={{flex: 1, margin: 10, justifyContent: 'space-between'}}>
          <View>
            <Text style={[globalStyles.H4, {marginTop: 12}]}>
              {items[i].name}
            </Text>
            <Text style={globalStyles.Captures}>{items[i].info1}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[globalStyles.smallText, {fontWeight: '700'}]}>
              {items[i].price}₽
            </Text>
            <Text style={[globalStyles.Links, {fontSize: 12}]}>Подробнее</Text>
          </View>
        </View>
      </Pressable>,
    );
  return <View style={styles.container}>{itemsView}</View>;
};

export default ServiceCards;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  itemContainer: {
    backgroundColor: white,
    marginLeft: 17,
    marginRight: 15,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 2,
  },
});
