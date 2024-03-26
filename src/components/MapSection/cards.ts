import img from '../../assets/magazyn.png';

export interface StorageCard {
    image: string;
    city: string;
    address: string;
    zipCode: string;
}

export const storageCards: StorageCard[] = [
    { city: 'Piaseczno', address: 'Jana Pawła II 41', zipCode: '05-500', image: img },
    { city: 'Pruszków', address: 'Bolesława Prusa 10', zipCode: '05-800', image: img }
];
