import piaseczno from '../../assets/magazyn.png';
import pruszkow from '../../assets/magazyn-pruszkow.png';

export type LatLng = { lat: number; lng: number };

export interface StorageCard {
    image: string;
    city: string;
    address: string;
    zipCode: string;
    latLng: LatLng;
}

export const storageCards: StorageCard[] = [
    {
        city: 'Piaseczno',
        address: 'Jana Pawła II 45',
        zipCode: '05-500',
        image: piaseczno,
        latLng: { lat: 52.0739427, lng: 21.0156116 }
    },
    {
        city: 'Pruszków',
        address: 'Bolesława Prusa 10',
        zipCode: '05-800',
        image: pruszkow,
        latLng: { lat: 52.1672958, lng: 20.807974 }
    }
];
