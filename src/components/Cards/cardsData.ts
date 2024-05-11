import location from '../../assets/icons/location.svg';
import allDay from '../../assets/icons/24h.svg';
import parking from '../../assets/icons/parking.svg';
import safety from '../../assets/icons/safety.svg';
import temperature from '../../assets/icons/temperature.svg';
import trolley from '../../assets/icons/trolley.svg';
import { IconCardProps } from './IconCard';

export const cards: IconCardProps[] = [
    {
        icon: location,
        title: 'Blisko Ciebie',
        desc: 'Nie musisz już jeździć daleko aby przechować swoje rzeczy. Comfort Storage jest w Twojej okolicy!'
    },
    {
        icon: allDay,
        title: 'Czynne całą dobę',
        desc: 'Masz dostęp do Swojego magazynu 24h na dobę, 365 dni w roku. Również w niedziele i Święta!'
    },
    {
        icon: temperature,
        title: 'Ciepło i sucho',
        desc: 'Magazyny znajdują się w ogrzewanym budynku, gdzie przez cały rok utrzymywana jest stała temperatura i nie ma wilgoci.'
    },
    {
        icon: safety,
        title: 'Prywatność i bezpieczeństwo',
        desc: 'Nikt poza Tobą nie ma dostępu do Twojego magazynu. Każdy klient operuje własną kłódką i kluczem. Obiekt jest stale monitorowany.'
    },
    {
        icon: trolley,
        title: 'Darmowe wózki i drabiny',
        desc: 'Na miejscu możesz korzystać z bezpłatnego sprzętu, który ułatwi Ci korzystanie ze Swojego magazynu i przenoszenie rzeczy.'
    },
    {
        icon: parking,
        title: 'Wygodny dojazd',
        desc: 'Na miejscu dostępny jest duży parking ze strefą rozładunkową, a wjazd z głównej ulicy przez szeroką bramę ułatwia dojazd.'
    }
];
