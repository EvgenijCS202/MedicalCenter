import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {globalStyles} from '../../../constants/globalStyles';
interface IProfileInput {
  stateName: string;
  state?: string;
  setState?: any;
}
const ProfileInput = ({stateName, state, setState}: IProfileInput) => {
  let input = <View></View>;
  if (state != undefined && setState != undefined)
    input = (
      <TextInput
        style={[globalStyles.H4, styles.input]}
        value={state}
        onChangeText={setState}
      />
    );
  return (
    <View>
      <Text style={[globalStyles.unActiveText, {marginVertical: 14}]}>
        {stateName}
      </Text>
      {input}
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({
  input: {
    padding: 0,
    lineHeight: 19,
    height: 19,
    marginBottom: 12,
  },
});
