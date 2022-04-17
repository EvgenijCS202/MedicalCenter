import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {lightBlue, white} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface IAppointmentNavigationItem {
  text: string;
  fixedState: number;
  state: number;
  setState: any;
}
const AppointmentNavigationItem = ({
  text,
  fixedState,
  state,
  setState,
}: IAppointmentNavigationItem) => {
  return (
    <Pressable
      style={[
        styles.container,
        state === fixedState ? styles.selectedContainer : {},
      ]}
      onPress={() => setState(fixedState)}>
      <Text
        style={[
          globalStyles.Captures,
          state === fixedState ? {color: white} : {color: '#000000'},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppointmentNavigationItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6.93,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0)',
  },
  selectedContainer: {
    backgroundColor: lightBlue,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.04)',
  },
});
