import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from '../../../../assets/img/icons/icons';
import {blue, gray} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface IFileButton {
  onPress: any;
  description: string;
  style?: any;
}
const FileButton = ({onPress, description, style}: IFileButton) => {
  return (
    <Pressable style={[{alignItems: 'center'}, style]} onPress={onPress}>
      <Icons name="file_pdf" style={{color: blue}} size={70} />
      <Text style={[globalStyles.smallText, {color: gray, marginTop: 10}]}>
        {description}
      </Text>
    </Pressable>
  );
};

export default FileButton;

const styles = StyleSheet.create({});
