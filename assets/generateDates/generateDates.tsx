import { addDays, format, getDay, startOfWeek } from 'date-fns'
type weekDays = {formatted: string,
  date: Date,
  key: number,}[]
export default function generateDates( dateStart: Date, dateEnd: Date) {
    let start=startOfWeek(dateStart, {weekStartsOn: 1})
    let n=1;
    const final:{week: weekDays, key: number}[]= []

    while(start.valueOf() - dateEnd.valueOf()<0)
    {
      const week: weekDays = [] 
      for(let i=1; i<8; ++i)
      {
          const newDate = addDays(start,i-1)
          week.push({ formatted: format(newDate, 'EEE'),
          date: newDate,
          key: getDay(newDate)
          })
      }
      final.push({week,key: n})
      ++n;
      start=addDays(start,7)
    }
  return final
}