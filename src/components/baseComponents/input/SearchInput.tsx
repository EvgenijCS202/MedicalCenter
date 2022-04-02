import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../constants/globalStyles';
import Icon from '../../../../assets/img/icons/icons';
interface ISearchInput {
  text: string;
  style?: any;
}
const SearchInput = ({text, style}: ISearchInput) => {
  return (
    <View style={[styles.container, style]}>
      <Icon
        name="magnifyingglass"
        color={'#3C3C4399'}
        style={{opacity: 0.6, marginRight: 13}}
        size={20}
      />
      <Text style={[globalStyles.text, {color: 'rgba(60,60,67,0.6)'}]}>
        {text}
      </Text>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 7,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    alignItems: 'center',
    borderRadius: 10,
  },
});
