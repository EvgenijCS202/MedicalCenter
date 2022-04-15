import DateSlots from './DateSlots';
import {addHours} from 'date-fns'

const DateGetDates = () => {
  const StringSlots: string[] = DateSlots();
  const dates: Date[] = [];
  for (let i = 0; i < StringSlots.length; ++i)
    if ( addHours(new Date(),3).valueOf() - new Date(StringSlots[i]).valueOf()  < 0)
      dates.push(new Date(StringSlots[i]));
  return dates;
};

export default DateGetDates;
