import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import {twoSignNum, width} from '../../../constants';
import {gray, lightBlue, white} from '../../../constants/colors';
import {globalStyles} from '../../../constants/globalStyles';
interface Params {
  timeSel: Date;
  setTimeSel: any;
  date: Date;
  empty: Boolean;
}
const TimeSlotButton = ({timeSel, setTimeSel, date, empty}: Params) => {
  if (empty) return <View style={styles.emptySlot} />;
  else
    return (
      <Pressable
        style={[
          styles.slotsCont,
          {
            backgroundColor:
              date.valueOf() - timeSel.valueOf() == 0 ? lightBlue : gray,
          },
        ]}
        onPress={() => setTimeSel(date)}>
        <Text style={[globalStyles.H5, styles.slotsText]}>
          {twoSignNum(date.getUTCHours())}:{twoSignNum(date.getUTCMinutes())}
        </Text>
      </Pressable>
    );
};

export default TimeSlotButton;

const styles = StyleSheet.create({
  slotsCont: {
    marginVertical: 6,
    width: (width - 74) / 3,
    height: 40,
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotsText: {
    color: white,
    fontWeight: '700',
  },
  emptySlot: {
    width: (width - 74) / 3,
    height: 40,
  },
});
