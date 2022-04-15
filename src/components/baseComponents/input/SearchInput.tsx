import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../constants/globalStyles';
import Icon from '../../../../assets/img/icons/icons';
interface ISearchInput {
  text: string;
  style?: any;
  onChange?: any;
}
const SearchInput = ({text, style, onChange}: ISearchInput) => {
  return (
    <View style={[styles.container, style]}>
      <Icon
        name="magnifyingglass"
        color={'#3C3C4399'}
        style={{opacity: 0.6, marginRight: 13, marginVertical: 7}}
        size={20}
      />
      <TextInput
        style={[globalStyles.text, {color: 'rgba(60,60,67,0.6)'}]}
        placeholder={text}
        onChangeText={onChange == undefined ? () => {} : onChange}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    alignItems: 'center',
    borderRadius: 10,
    height: 36,
  },
});
