import { addHours, startOfDay } from 'date-fns';
import React, {useContext, useState} from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import DateCalendar from '../components/screensComponents/dateScreen/DateCalendar';
import DayTimeButton from '../components/baseComponents/buttons/DayTimeButton';
import DateGetTime from '../components/screensComponents/dateScreen/DateGetTime';
import { height } from '../constants';
import TimeSlotButton from '../components/baseComponents/buttons/TimeSlotButton';
import ContextTimeSlot from '../ContextTimeSlot';

export default function DateScreen() {
    const {dateSlots, timeSel, setTimeSel} = useContext(ContextTimeSlot)

    const [sel,setSel] = useState( startOfDay(dateSlots[0]) )
    
    const [dayTime,setDayTime] = useState(
        (dateSlots[0].valueOf()-addHours(startOfDay(dateSlots[0]),12).valueOf()<0)?
        1:((dateSlots[0].valueOf()-addHours(startOfDay(dateSlots[0]),16).valueOf()<0)?2:3)
    )

    const renderTimeItem = (timeArr: {date: Date, key: number}[]) => {
        const itemArr = []
        for(let i=0;i<timeArr.length;i+=3)
        {
            const rem = timeArr.length-i-3>0?0:timeArr.length%3
            const check = rem==0?2:rem-1

            itemArr.push(
                <View key={i/3} style={styles.slotsCont}>
                    <TimeSlotButton timeSel={timeSel} setTimeSel={setTimeSel} 
                    date={timeArr[i].date} empty={false} />
                    <TimeSlotButton timeSel={timeSel} setTimeSel={setTimeSel} 
                    date={check>0?timeArr[i+1].date:new Date()} empty={check>0?false:true} />
                    <TimeSlotButton timeSel={timeSel} setTimeSel={setTimeSel} 
                    date={check>1?timeArr[i+2].date:new Date()} empty={check>1?false:true} />
                </View>
            )
        }
        return itemArr
    }

    return (
        <View style={{height: height/1.7}}>
            <DateCalendar sel={sel} setSel={setSel} />
            <View style={styles.DayTimeCont}>
                <DayTimeButton dayTime={dayTime} dayTimeState={1} setDayTime={() => setDayTime(1)} iconName={'day-haze'} text={'Утро'} />
                <DayTimeButton dayTime={dayTime} dayTimeState={2} setDayTime={() => setDayTime(2)} iconName={'day-sunny'} text={'День'} />
                <DayTimeButton dayTime={dayTime} dayTimeState={3} setDayTime={() => setDayTime(3)} iconName={'night-clear'} text={'Вечер'} />
            </View>
            <ScrollView style={{marginBottom: 130}} >
                {renderTimeItem(DateGetTime({dateSlots, date: sel, dayTime}))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    DayTimeCont: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 30,
        justifyContent: 'space-evenly',
        height: 50,
    },
    slotsCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
});