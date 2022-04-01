import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {Day, width} from '../../../constants'
import { startOfDay } from 'date-fns';
import DateSortedSlotArray from './DateSortedSlotArray';
import { gray, lightBlue, white } from '../../../constants/colors';
import { globalStyles } from '../../../constants/globalStyles';
interface IDateCalendar {
    sel: Date,
    setSel: any,
    dateSlots: Date[]
}
type weekDay = {
    formatted: string,
    date: Date,
    key: number,
  }
const DateCalendar = ({sel, setSel, dateSlots}:IDateCalendar) => {
    const lastDate = dateSlots[dateSlots.length-1]
    const data = DateSortedSlotArray(new Date(), lastDate)

    const circleColor = (date: Date): string => { 
        return sel.valueOf()-date.valueOf()==0?'selected':
        (startOfDay(new Date()).valueOf()-date.valueOf()==0?'start':'normal')
    }

    const renderWeek = (item: weekDay) => (
        <View style={{width: (width-30)/7}} key={item.key} >
            <Text style={[styles.dayText,{color: circleColor(item.date)=='selected'?'#373737':'#959595'}]}>
                {Day(item.key)}
            </Text>
            <Pressable style={styles.dayNumContainer} onPress={() => 
            (startOfDay(new Date()).valueOf()-item.date.valueOf()<=0?setSel(item.date):(null))}>
                <Text style={[globalStyles.H3,styles.normalCircle,circleColor(item.date)=='selected'?styles.selCircle:{},
            circleColor(item.date)=='start'?styles.startCircle:{}]}>
                    {item.date.getUTCDate()}
                </Text>
            </Pressable>
        </View>
    )

  return (
    <View style={styles.container}>
        <FlatList data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <View style={styles.week} key={item.key}>
                {item.week.map(renderWeek)}
            </View>
            )}
        horizontal
        pagingEnabled/>
    </View>
  )
}

export default DateCalendar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    week: {
        width: width-30,
        flexDirection: 'row'
    },
    dayText: {
        textAlign: 'center',
        fontFamily: 'Manrope-Regular',
        fontSize: 10,
        fontWeight: '700'
    },
    dayNumContainer: {
        height: (width-30)/7-20,
        borderRadius: (width-30)/7-20,
        marginHorizontal: 10,
    },
    normalCircle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '700',
        height: (width-30)/7-20,
        borderRadius: (width-30)/7-20,
        color: '#959595',
        backgroundColor: white
    },
    selCircle: {
        color: white,
        backgroundColor: lightBlue
    },
    startCircle: {
        color: white,
        backgroundColor: gray
    }
})