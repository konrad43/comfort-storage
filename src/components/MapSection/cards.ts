import img from '../../assets/magazyn.png';

export interface StorageCard {
    image: string;
    city: string;
    address: string;
    zipCode: string;
    latLng: { lat: number; lng: number };
}

export const storageCards: StorageCard[] = [
    {
        city: 'Piaseczno',
        address: 'Jana Pawła II 41',
        zipCode: '05-500',
        image: img,
        latLng: { lat: 52.074398, lng: 21.0144066 }
    },
    {
        city: 'Pruszków',
        address: 'Bolesława Prusa 10',
        zipCode: '05-800',
        image: img,
        latLng: { lat: 52.1675058, lng: 20.8055244 }
    }
];
