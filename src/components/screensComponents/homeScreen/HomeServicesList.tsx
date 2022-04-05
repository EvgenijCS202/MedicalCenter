import Appointment from '../../baseComponents/appointments/Appointment';

export default function HomeServicesList(type: string) {
  switch (type) {
    case 'cardio': {
      let arr = [];
      for (let i = 0; i < 20; ++i)
        arr.push(
          new Appointment({
            type: 'service',
            name: 'Велоэргометрия',
            description:
              'Велоэргометрия – это один из нагрузочных тестов, который применяется для выявления заболеваний сердечно-сосудистой системы. Основа методики – сравнение данных, полученных после ЭКГ, а также измерений артериального давления пациента в состоянии покоя, в процессе постепенного увеличения физической нагрузки и после ее окончания.',
            image: require('../../../../assets/img/services/service.png'),
            info1: '20 мин',
            info2: '30 мин',
            info3: '18+',
            price: 1500,
          }),
        );
      return arr;
    }
    case 'dentist': {
      let arr = [];
      for (let i = 0; i < 20; ++i)
        arr.push(
          new Appointment({
            type: 'service',
            name: 'Ортодонтия',
            description:
              'Ортодонтия исправляет неровные зубные ряды, формирует правильный прикус, лечит функциональные расстройства жевательных мышц.  В работе врачи  используют разнообразные аппараты, такие как пластины, трейнеры и брекеты.',
            image: require('../../../../assets/img/services/service.png'),
            info1: '15 мин',
            info2: '5 мин',
            info3: '14+',
            price: 2000,
          }),
        );
      return arr;
    }
    case 'analyses': {
      let arr = [];
      for (let i = 0; i < 13; ++i)
        arr.push(
          new Appointment({
            type: 'service',
            name: 'Анализ крови',
            description:
              'Клинический (общий) анализ крови – это развернутое исследование качественного и количественного состава крови, в ходе которого дается характеристика эритроцитов и их специфических показателей (MCV, MCH, MCHC, RDW), лейкоцитов и их разновидностей в процентном соотношении (лейкоцитарная формула) и тромбоцитов, а также определяется скорость оседания эритроцитов (СОЭ). Используется для диагностики и контроля лечения многих заболеваний.',
            image: require('../../../../assets/img/services/service.png'),
            info1: '5 мин',
            info2: '1 ч',
            info3: '18+',
            price: 200,
          }),
        );
      return arr;
    }
    default: {
      return [];
    }
  }
}
