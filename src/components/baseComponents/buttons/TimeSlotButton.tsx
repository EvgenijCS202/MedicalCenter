import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { twoSignNum, width } from '../../../constants'
interface Params {
    timeSel: Date,
    setTimeSel: any,
    date: Date,
    empty: Boolean
}
const TimeSlotButton = ({timeSel, setTimeSel, date, empty}:Params) => {
    if(empty)
        return(
            <View style={styles.emptySlot}/>
        )
    else
    return (
        <Pressable onPress={() => setTimeSel(date)}>    
            <Text style={[styles.slotsText, {backgroundColor: date.valueOf()-timeSel.valueOf()==0?'blue':'gray',
                    color: date.valueOf()-timeSel.valueOf()==0?'white':'black'}]}>
                {twoSignNum(date.getUTCHours())}:{twoSignNum(date.getUTCMinutes())}
            </Text>
        </Pressable>
  )
}

export default TimeSlotButton

const styles = StyleSheet.create({
    slotsText: {
        marginVertical: 10,
        width: width*0.9/3.5,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
    },
    emptySlot: {
        width: width*0.9/3.5,
        height: 40,
    }
})