import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../../../../assets/img/icons/icons';
import {lightBlue, white} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface IBaseHeader {
  title: string;
  props: any;
  color?: string;
  onPress?: () => any;
}
const BaseHeader = ({title, props, color, onPress}: IBaseHeader) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: color == undefined ? lightBlue : color},
      ]}>
      <Pressable
        style={styles.iconContainer}
        onPress={
          onPress == undefined ? () => props.navigation.goBack() : onPress
        }>
        <Icon name="vector" color="black" size={16} />
      </Pressable>
      <Text style={[globalStyles.H3, {color: white, paddingRight: 40}]}>
        {title}
      </Text>
      <View></View>
    </View>
  );
};

export default BaseHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 31,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
});
