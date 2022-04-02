import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../../../../assets/img/icons/icons';
import {blue, gray} from '../../../constants/colors';
interface IIconsBottomTabNavigation {
  focused: boolean;
  iconName: string;
  text: string;
}
const IconsBottomTabNavigation = ({
  focused,
  iconName,
  text,
}: IIconsBottomTabNavigation) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} style={{color: focused ? blue : gray}} />
      <Text style={[styles.text, {color: focused ? blue : gray}]}>{text}</Text>
    </View>
  );
};

export default IconsBottomTabNavigation;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 14,
  },
});
