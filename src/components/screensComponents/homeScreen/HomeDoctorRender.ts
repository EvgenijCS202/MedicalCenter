import HomeDoctorsList from './HomeDoctorsList';
import DoctorCard from '../../baseComponents/buttons/DoctorCard';
interface IHomeDoctorRender {
  navigation: any;
  text: string;
}
const HomeDoctorRender = ({navigation, text}: IHomeDoctorRender) => {
  const items = HomeDoctorsList().filter(
    item =>
      item.doctorName?.includes(text) ||
      item.doctorSurname?.includes(text) ||
      item.doctorMiddleName?.includes(text) ||
      item.name.includes(text),
  );
  const itemsView = [];
  for (let i = 0; i < items.length; ++i) {
    itemsView.push(DoctorCard({doctor: items[i], num: i, navigation}));
  }
  return itemsView;
};

export default HomeDoctorRender;
