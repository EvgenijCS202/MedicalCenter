import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from '../../../../assets/img/icons/icons';
import {gray, white} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface IRateButton {
  onPress: any;
  style?: any;
}
const RateButton = ({onPress, style}: IRateButton) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Icons name="star" size={25} style={{color: white}} />
      <Text style={[globalStyles.H5, {color: white, marginLeft: 10}]}>
        Оценить услугу
      </Text>
    </Pressable>
  );
};

export default RateButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: 176,
    height: 40,
    justifyContent: 'center',
  },
});
