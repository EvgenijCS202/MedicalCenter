import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useMemo} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {Day, width} from '../../../constants'
import { startOfDay } from 'date-fns';
import DateGetDates from './DateGetDates';
import DateSortedSlotArray from './DateSortedSlotArray';

const DateCalendar = ({sel, setSel}:any) => {
    const dateSlots = DateGetDates()

    const lastDate = dateSlots[dateSlots.length-1]
    const data = useMemo(() => DateSortedSlotArray(new Date(), lastDate),[lastDate])

    const circleColor = (date: Date) => { 
        return sel.valueOf()-date.valueOf()==0?'gold':
        (startOfDay(new Date()).valueOf()-date.valueOf()==0?'#00ffff':'white')
    }

    const renderWeek = (item: any) => (
        <View style={{width: width*0.9/7}} key={item.key} >
            <Text style={styles.dayText}>
                {Day(item.key)}
            </Text>
            <Pressable style={styles.dayNum} onPress={() => 
            (startOfDay(new Date()).valueOf()-item.date.valueOf()<=0?setSel(item.date):(null))}>
                <Text style={[styles.dayNum, styles.dayNumText,
                    {backgroundColor: circleColor(item.date)}]}>
                    {item.date.getUTCDate()}
                </Text>
            </Pressable>
        </View>
    )

  return (
    <View style={styles.scrollArea}>
        <FlatList data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
            return (
                <View style={styles.itemSt}>
                    {item.week.map(renderWeek)}
                </View>
            )
        }}
        horizontal
        pagingEnabled
        />
    </View>
  )
}

export default DateCalendar

const styles = StyleSheet.create({
    scrollArea: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    itemSt: {
        width: width*0.9,
        flexDirection: 'row'
    },
    dayText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    dayNum: {
        height: width*0.9/7-10,
        borderRadius: width*0.9/7-10,
        margin: 5,
    },
    dayNumText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: 'black',
        borderRadius: width*0.9/7-10,
        margin: 0,
    },
})