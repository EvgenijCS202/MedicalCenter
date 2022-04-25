import {parseISO} from 'date-fns';
import Appointment from './Appointment';

export default function AppointmentSort(appointments: Appointment[]) {
  appointments.sort(
    (prev, next) =>
      (typeof prev.date == 'undefined'
        ? new Date().valueOf()
        : typeof prev.date == 'string'
        ? parseISO(prev.date).valueOf()
        : prev.date.valueOf()) -
      (typeof next.date == 'undefined'
        ? new Date().valueOf()
        : typeof next.date == 'string'
        ? parseISO(next.date).valueOf()
        : next.date.valueOf()),
  );
  return appointments;
}
