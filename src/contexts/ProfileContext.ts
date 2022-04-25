import {createContext, useState} from 'react';

interface IProfileContext {
  image: any;
  name: string;
  mail: string;
  phoneNumber: string;
}
const ProfileContext = createContext<[IProfileContext, any]>([
  {
    image: '',
    name: '',
    mail: '',
    phoneNumber: '',
  },
  '',
]);

export default ProfileContext;
