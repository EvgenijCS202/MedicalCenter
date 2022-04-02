import {addDays, format, getDay, startOfWeek} from 'date-fns';
type weekDay = {
  formatted: string;
  date: Date;
  key: number;
};
type week = {
  week: weekDay[];
  key: number;
};

export default function DateSortedSlotArray(dateStart: Date, dateEnd: Date) {
  let start = startOfWeek(dateStart, {weekStartsOn: 1});
  let n = 1;
  const final: week[] = [];

  while (start.valueOf() - dateEnd.valueOf() < 0) {
    const week: weekDay[] = [];
    for (let i = 1; i < 8; ++i) {
      const newDate = addDays(start, i - 1);
      week.push({
        formatted: format(newDate, 'EEE'),
        date: newDate,
        key: getDay(newDate),
      });
    }
    final.push({week, key: n});
    ++n;
    start = addDays(start, 7);
  }
  return final;
}
