import { Dimensions} from "react-native"

export const {width,height} = Dimensions.get('screen')

export const Day = (day: number): string => {switch(day) {
    case 1: return 'M'
    case 2: return 'T'
    case 3: return 'W'
    case 4: return 'T'
    case 5: return 'F'
    case 6: return 'S'
    case 0: return 'S'
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