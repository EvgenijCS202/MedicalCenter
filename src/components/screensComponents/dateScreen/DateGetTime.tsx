import { addHours, startOfDay } from 'date-fns';

const DateGetTime = ({dateSlots, date, dayTime}: any) => {
    const times: {date: Date, key: number}[]=[]
    let n=1
    for(let i=0;i<dateSlots.length;++i)
        if(startOfDay(dateSlots[i]).valueOf()-date.valueOf()==0)
        {
            if(dateSlots[i].valueOf() - addHours(date,12).valueOf()<0)
            {
                if(dayTime==1)
                {
                    times.push({date:dateSlots[i],key:n})
                    ++n;
                }
                else
                continue
            }
            else if(dateSlots[i].valueOf() - addHours(date,16).valueOf()<0)
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