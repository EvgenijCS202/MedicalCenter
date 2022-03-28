import { white } from "../../../constants/colors"
import HomeServicesList from "./HomeServicesList"

const HomeAreasList = (extra: boolean) => {
  const areaList = [
    {
        name: 'Кардиология',
        color: '#EC7A76',
        iconName: 'heart',
        services: HomeServicesList('cardio'),
        key: 1
    },
    {
        name: 'Кардиология',
        color: '#EC7A76',
        iconName: 'heart',
        services: HomeServicesList('cardio'),
        key: 2
    },
    {
      name: 'Кардиология',
      color: '#EC7A76',
      iconName: 'heart',
      services: HomeServicesList('cardio'),
      key: 5
  },
  ]
  if(extra && areaList.length%2==1)
    areaList.push({
        name: '',
        color: white,
        iconName: '',
        services: [],
        key: areaList.length+1
    })
    return areaList
}

export default HomeAreasList
