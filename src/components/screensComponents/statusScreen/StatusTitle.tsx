import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../constants/globalStyles';
interface IStatusTitle {
  color: string;
}
const StatusTitle = ({color}: IStatusTitle) => {
  if (color == '#32C000')
    return (
      <View style={styles.container}>
        <Text style={globalStyles.H1}>
          Запись <Text style={{color: color}}>успешно</Text> оформлена
        </Text>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Text style={globalStyles.H1}>
          Что-то пошло <Text style={{color: color}}>не так...</Text>
        </Text>
      </View>
    );
};

export default StatusTitle;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 23,
  },
});
