import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../constants/globalStyles';
import {lightBlue, white} from '../../../constants/colors';
import Icons from '../../../../assets/img/icons/icons';

interface IEditButton {
  text: string;
  style?: any;
  onPress: () => any;
}

const EditButton = ({text, style, onPress}: IEditButton) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={[globalStyles.smallText, styles.text]}>{text}</Text>
      <Icons
        name="vector"
        color={white}
        size={20}
        style={{transform: [{rotate: '180deg'}]}}
      />
    </Pressable>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightBlue,
    borderRadius: 12,
    flexDirection: 'row',
    width: 220,
    height: 48,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: white,
    fontWeight: '700',
  },
});
