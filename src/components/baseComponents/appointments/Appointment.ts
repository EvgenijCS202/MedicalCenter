interface IAppointment {
  type: 'service' | 'doctor';
  name: string;
  description: string;
  image: any;
  price: number;
  info1: string;
  info2: string;
  info3: string;
  sumRates?: number;
  numRates?: number;
  doctorName?: string;
  doctorSurname?: string;
  doctorMiddleName?: string;
}
export default class Appointment {
  type: 'service' | 'doctor';
  name: string;
  description: string;
  image: any;
  price: number;
  info1: string;
  info2: string;
  info3: string;
  date?: Date;
  sumRates?: number;
  numRates?: number;
  doctorName?: string;
  doctorSurname?: string;
  doctorMiddleName?: string;
  constructor({
    type,
    name,
    description,
    image,
    price,
    info1,
    info2,
    info3,
    sumRates,
    numRates,
    doctorName,
    doctorSurname,
    doctorMiddleName,
  }: IAppointment) {
    this.type = type;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.info1 = info1;
    this.info2 = info2;
    this.info3 = info3;
    if (type === 'doctor') {
      this.sumRates = sumRates;
      this.numRates = numRates;
      this.doctorName = doctorName;
      this.doctorSurname = doctorSurname;
      this.doctorMiddleName = doctorMiddleName;
    }
  }
}
