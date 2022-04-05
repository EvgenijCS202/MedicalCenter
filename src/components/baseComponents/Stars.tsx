import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from '../../../assets/img/icons/icons';
import {gray} from '../../constants/colors';
interface IStars {
  sumRates: number;
  numRates: number;
}
const Stars = ({sumRates, numRates}: IStars) => {
  const rate = Math.floor(sumRates / numRates);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Icon name="star" size={30} style={{color: i < rate ? '#F9DB71' : gray}} key={i} />,
    );
  }
  return <View style={styles.container}>{stars}</View>;
};

export default Stars;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
});
