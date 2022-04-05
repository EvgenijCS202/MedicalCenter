import HomeDoctorsList from './HomeDoctorsList';
import DoctorCard from '../../baseComponents/buttons/DoctorCard';
interface IHomeDoctorRender {
  navigation: any;
}
const HomeDoctorRender = ({navigation}: IHomeDoctorRender) => {
  const items = HomeDoctorsList();
  const itemsView = [];
  for (let i = 0; i < items.length; ++i) {
    itemsView.push(DoctorCard({doctor: items[i], key: i, navigation}));
  }
  return itemsView;
};

export default HomeDoctorRender;
