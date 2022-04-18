import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from '../../../assets/img/icons/icons';
import {gray} from '../../constants/colors';
interface IStars {
  size: number;
  rate: number;
  onPress?: any;
  style?: any;
}
const Stars = ({size, rate, onPress, style}: IStars) => {
  const curRate = Math.floor(rate);
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (onPress == undefined)
      stars.push(
        <Icon
          name="star"
          size={size}
          style={{color: i < curRate + 1 ? '#F9DB71' : gray}}
          key={i}
        />,
      );
    else
      stars.push(
        <Pressable onPress={() => onPress(i)} key={i}>
          <Icon
            name="star"
            size={size}
            style={{color: i < curRate + 1 ? '#F9DB71' : gray}}
          />
        </Pressable>,
      );
  }
  return <View style={[styles.container, style]}>{stars}</View>;
};

export default Stars;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
