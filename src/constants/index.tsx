import { Dimensions} from "react-native"

export const {width,height} = Dimensions.get('screen')

export const Day = (day: number): string => {switch(day) {
    case 1: return 'П'
    case 2: return 'В'
    case 3: return 'С'
    case 4: return 'Ч'
    case 5: return 'П'
    case 6: return 'С'
    case 0: return 'В'
    default: return ''
}}

export const twoSignNum = (num: number):string => {
    return num<10?'0'+num:num.toString()
}

export const stringDate = (date: Date): string => {
    const stringDate=twoSignNum(date.getUTCHours())+':'+
    twoSignNum(date.getUTCMinutes())+' '+
    twoSignNum(date.getUTCDate())+'.'+
    twoSignNum(date.getUTCMonth()+1)+'.'+
    date.getUTCFullYear().toString()
    return stringDate
}