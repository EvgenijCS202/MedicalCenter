import Appointment from '../../baseComponents/appointments/Appointment';
export default function HomeDoctorsList() {
  const doctorList = [];
  for (let i = 0; i < 17; ++i) {
    doctorList.push(
      new Appointment({
        type: 'doctor',
        name: 'Терапевт',
        description: 'Олег Павлович - сертифицированный врач терапевт I квалификационной категории. Общий стаж работы - 25 лет, в аллергологии-иммунологии - 10 лет.',
        image: require('../../../../assets/img/doctors/БаратынскийОП.png'),
        price: 1500,
        info1: '25 лет',
        info2: '150 чел',
        info3: '15 лет',
        sumRates: 4,
        numRates: 1,
        doctorSurname: 'Баратынский',
        doctorName: 'Олег',
        doctorMiddleName: 'Павлович',
      }),
    );
  }
  return doctorList;
}
