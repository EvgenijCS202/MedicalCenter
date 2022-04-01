import { Text, View } from 'react-native'
import React from 'react'
import Icon from '../../../../assets/img/icons/icons'
import { getMonth } from 'date-fns'
import { gray, lightBlue } from '../../../constants/colors'
import { globalStyles } from '../../../constants/globalStyles'
interface IDateIconMonths {
    dates: Date[],
}

const textMonth = (month: number): string => {
    switch(month) {
        case 0: return 'Январь'
        case 1: return 'Февраль'
        case 2: return 'Март'
        case 3: return 'Апрель'
        case 4: return 'Май'
        case 5: return 'Июнь'
        case 6: return 'Июль'
        case 7: return 'Август'
        case 8: return 'Сентябрь'
        case 9: return 'Октябрь'
        case 10: return 'Ноябрь'
        case 11: return 'Декабрь'
        default: return ''
    }
}

const DateIconMonths = ({dates}: IDateIconMonths) => {
    const start = dates[0]
    const end = dates[dates.length-1]
    let text: string = ''
    if(getMonth(start)==getMonth(end))
        text=textMonth(getMonth(start))
    else
        text=textMonth(getMonth(start))+'-'+textMonth(getMonth(end))
    return (
        <View style={{flexDirection: 'row'}}>
            <Icon name='calendar' style={{color: lightBlue}} size={30}/>
            <Text style={[globalStyles.smallText, {color: gray,textAlignVertical: 'center'}]}>{text}</Text>
        </View>
    )
}

export default DateIconMonths