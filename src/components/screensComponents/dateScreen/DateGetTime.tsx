import { addHours, startOfDay } from 'date-fns';
interface IDateGetTime {
    dateSlots: Date[],
    dateSel: Date,
    dayTime: number
}
const DateGetTime = ({dateSlots, dateSel, dayTime}: IDateGetTime) => {
    const times: {date: Date, key: number}[]=[]
    let n=1
    for(let i=0;i<dateSlots.length;++i)
        if(startOfDay(dateSlots[i]).valueOf()-dateSel.valueOf()==0)
        {
            if(dateSlots[i].valueOf() - addHours(dateSel,12).valueOf()<0)
            {
                if(dayTime==1)
                {
                    times.push({date:dateSlots[i],key:n})
                    ++n;
                }
                else
                continue
            }
            else if(dateSlots[i].valueOf() - addHours(dateSel,16).valueOf()<0)
            {
                if(dayTime==2)
                {
                    times.push({date:dateSlots[i],key:n})
                    ++n;
                }
                else
                continue
            }
            else
            {
                if(dayTime==3)
                {
                    times.push({date:dateSlots[i],key:n})
                    ++n;
                }
                else
                continue
            }
        }
    return times
}

export default DateGetTime