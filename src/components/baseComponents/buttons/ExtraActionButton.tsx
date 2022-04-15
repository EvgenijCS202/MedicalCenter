import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from '../../../../assets/img/icons/icons';
import {lightBlue, white} from '../../../constants/colors';
import { globalStyles } from '../../../constants/globalStyles';
interface IExtraActionButton {
  iconName: string;
  description: string;
  onPress?: () => void
}
const ExtraActionButton = ({iconName, description, onPress}: IExtraActionButton) => {
    
  return (
    <View style={{alignItems: 'center'}}>
      <Pressable style={styles.container} onPress={onPress}>
        <Icons name={iconName} style={{color: white}} size={25}/>
      </Pressable>
      <Text style={[globalStyles.Captures,styles.description]}>{description}</Text>
    </View>
  );
};

export default ExtraActionButton;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    marginTop: 8,
  },
});
