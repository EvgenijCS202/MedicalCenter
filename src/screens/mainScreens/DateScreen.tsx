import {addHours, startOfDay} from 'date-fns';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import DateCalendar from '../../components/screensComponents/dateScreen/DateCalendar';
import DayTimeButton from '../../components/baseComponents/buttons/DayTimeButton';
import {globalStyles} from '../../constants/globalStyles';
import DateGetDates from '../../components/screensComponents/dateScreen/DateGetDates';
import DateIconMonths from '../../components/screensComponents/dateScreen/DateIconMonths';
import {white} from '../../constants/colors';
import SubmitButton from '../../components/baseComponents/buttons/SubmitButton';
import DateSlotsRender from '../../components/screensComponents/dateScreen/DateSlotsRender';
interface IDateScreen {
  navigation: any;
  route: {
    params: {
      data: {
        name: string;
        description: String;
        image: any;
        info1: string;
        info2: string;
        info3: string;
        price: number;
      };
    };
  };
}
export default function DateScreen({navigation, route}: IDateScreen) {
  const dateSlots = DateGetDates();
  const [timeSel, setTimeSel] = useState(dateSlots[0]);

  const [dateSel, setDateSel] = useState(startOfDay(dateSlots[0]));

  const [dayTime, setDayTime] = useState(
    dateSlots[0].valueOf() - addHours(startOfDay(dateSlots[0]), 12).valueOf() <
      0
      ? 1
      : dateSlots[0].valueOf() -
          addHours(startOfDay(dateSlots[0]), 16).valueOf() <
        0
      ? 2
      : 3,
  );
  return (
    <View style={{backgroundColor: white, height: '100%'}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', marginVertical: 24}}>
          <Image
            style={{width: 60, height: 60, marginHorizontal: 16}}
            source={route.params.data.image}
          />
          <Text
            style={[
              globalStyles.H2,
              {textAlignVertical: 'center', marginHorizontal: 10},
            ]}>
            {route.params.data.name}
          </Text>
        </View>
        <View style={styles.title2}>
          <Text style={globalStyles.H3}>Выберите время</Text>
          <DateIconMonths dates={dateSlots} />
        </View>
        <DateCalendar sel={dateSel} setSel={setDateSel} dateSlots={dateSlots} />
        <View style={styles.DayTimeCont}>
          <DayTimeButton
            dayTime={dayTime}
            dayTimeState={1}
            setDayTime={() => setDayTime(1)}
            iconName={'sunrise'}
            text={'Утро'}
          />
          <DayTimeButton
            dayTime={dayTime}
            dayTimeState={2}
            setDayTime={() => setDayTime(2)}
            iconName={'sunny_day'}
            text={'День'}
          />
          <DayTimeButton
            dayTime={dayTime}
            dayTimeState={3}
            setDayTime={() => setDayTime(3)}
            iconName={'moon'}
            text={'Вечер'}
          />
        </View>
        <ScrollView style={styles.slotsCont}>
          {DateSlotsRender({dateSlots, dateSel, timeSel, setTimeSel, dayTime})}
        </ScrollView>
      </View>
      <SubmitButton
        text="Записаться"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title2: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12,
    justifyContent: 'space-between',
  },
  DayTimeCont: {
    flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  slotsCont: {
    marginVertical: 26,
    marginHorizontal: 17,
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
});
