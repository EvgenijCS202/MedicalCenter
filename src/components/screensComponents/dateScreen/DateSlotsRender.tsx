import {StyleSheet, View} from 'react-native';
import React from 'react';
import DateGetTime from './DateGetTime';
import TimeSlotButton from '../../baseComponents/buttons/TimeSlotButton';

interface IDateSlotsRender {
  dateSlots: Date[];
  dateSel: Date;
  timeSel: Date;
  setTimeSel: any;
  dayTime: number;
}
const DateSlotsRender = ({
  dateSlots,
  dateSel,
  timeSel,
  setTimeSel,
  dayTime,
}: IDateSlotsRender) => {
  const timeArr = DateGetTime({dateSlots, dateSel, dayTime});
  const itemArr = [];
  for (let i = 0; i < timeArr.length; i += 3) {
    const rem = timeArr.length - i - 3 > 0 ? 0 : timeArr.length % 3;
    const check = rem == 0 ? 2 : rem - 1;
    itemArr.push(
      <View key={i / 3} style={styles.slotsCont}>
        <TimeSlotButton
          timeSel={timeSel}
          setTimeSel={setTimeSel}
          date={timeArr[i].date}
          empty={false}
        />
        <TimeSlotButton
          timeSel={timeSel}
          setTimeSel={setTimeSel}
          date={check > 0 ? timeArr[i + 1].date : new Date()}
          empty={check > 0 ? false : true}
        />
        <TimeSlotButton
          timeSel={timeSel}
          setTimeSel={setTimeSel}
          date={check > 1 ? timeArr[i + 2].date : new Date()}
          empty={check > 1 ? false : true}
        />
      </View>,
    );
  }
  return itemArr;
};

export default DateSlotsRender;

const styles = StyleSheet.create({
  slotsCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
