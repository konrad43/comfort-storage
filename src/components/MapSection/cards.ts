import piaseczno from '../../assets/magazyn.png';
import pruszkow from '../../assets/magazyn-pruszkow.png';
import mlociny from '../../assets/magazyn-galeria-mlociny.jpg';

export type LatLng = { lat: number; lng: number };

export interface StorageCard {
    image: string;
    city: string;
    address: string;
    zipCode: string;
    latLng: LatLng;
    link: string;
    building?: string;
}
export const storageCards: StorageCard[] = [
    {
        city: 'Warszawa',
        building: 'Galeria Młociny',
        address: 'Zgrupowania AK "Kampinos" 15',
        zipCode: '01-943',
        image: mlociny,
        latLng: { lat: 52.29416417999828, lng: 20.929214742506122 },
        link: 'https://wynajmij.comfortstorage.eu/location/2'
    },
    {
        city: 'Piaseczno',
        address: 'Jana Pawła II 45',
        zipCode: '05-500',
        image: piaseczno,
        latLng: { lat: 52.07394842206938, lng: 21.015793215501 },
        link: 'https://wynajmij.comfortstorage.eu/location/0'
    },
    {
        city: 'Pruszków',
        address: 'Bolesława Prusa 10',
        zipCode: '05-800',
        image: pruszkow,
        latLng: { lat: 52.1672958, lng: 20.807974 },
        link: 'https://wynajmij.comfortstorage.eu/location/1'
    }
];
