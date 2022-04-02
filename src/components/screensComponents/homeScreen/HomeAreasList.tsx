import {blue} from '../../../constants/colors';
import HomeServicesList from './HomeServicesList';

const HomeAreasList = (navigation: any) => {
  const areaList = [
    {
      name: 'Кардиология',
      color: '#EC7A76',
      iconName: 'heart',
      services: HomeServicesList('cardio'),
      link: () =>
        navigation.navigate('Area', {
          services: HomeServicesList('cardio'),
          title: 'Кардиология',
        }),
      key: 1,
    },
    {
      name: 'Стоматология',
      color: blue,
      iconName: 'dental_care',
      services: HomeServicesList('dentist'),
      link: () =>
        navigation.navigate('Area', {
          services: HomeServicesList('dentist'),
          title: 'Стоматология',
        }),
      key: 2,
    },
    {
      name: 'Анализы',
      color: '#6458F0',
      iconName: 'microscope',
      services: HomeServicesList('analyses'),
      link: () =>
        navigation.navigate('Area', {
          services: HomeServicesList('analyses'),
          title: 'Анализы',
        }),
      key: 3,
    },
    {
      name: 'Анализы',
      color: '#6458F0',
      iconName: 'microscope',
      services: HomeServicesList('analyses'),
      link: () =>
        navigation.navigate('Area', {
          services: HomeServicesList('analyses'),
          title: 'Анализы',
        }),
      key: 4,
    },
    {
      name: 'Кардиология',
      color: '#EC7A76',
      iconName: 'heart',
      services: HomeServicesList('cardio'),
      link: () =>
        navigation.navigate('Area', {
          services: HomeServicesList('cardio'),
          title: 'Кардиология',
        }),
      key: 5,
    },
    {
      name: 'Стоматология',
      color: blue,
      iconName: 'dental_care',
      services: HomeServicesList('dentist'),
      link: () =>
        navigation.navigate('Area', {
          services: HomeServicesList('dentist'),
          title: 'Стоматология',
        }),
      key: 6,
    },
  ];
  return areaList;
};

export default HomeAreasList;
