import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import clsx from 'clsx';

import star from '../../../assets/icons/star.svg';
import style from './CarouselCard.module.scss';

const Icon = (props: { text: string }) => {
    const { text } = props;
    return <div className={clsx(style.icon, 'mt-2')}>{text}</div>;
};

const Stars = (props: { starsCount: number }) => {
    const { starsCount } = props;
    const starIcons = Array.from({ length: starsCount }, () => 0).map(() => <Image src={star} />);
    return <>{starIcons}</>;
};

export const CarouselCard = () => {
    return (
        <Card className="mx-2">
            <Card.Body>
                <div className={style.iconWrapper}>
                    <Icon text="B" />
                    <p className={style.cardText}>01/01/2025</p>
                </div>
                <h6 className={clsx(style.cardTitle, 'pt-2')}>Barbara Maria</h6>
                <Card.Text className={style.cardText}>
                    Korzystam od roku z usług magazynu Comfort Storage. Wynajęłam w korzystnej cenie
                    box ok. 2 m2 i jestem z tego bardzo zadowolona. Łatwy dojazd, duży i wygodny
                    parking, miejsce jest doskonale zorganizowane, to znaczy...
                </Card.Text>
                <div className={style.stars}>
                    <p className={clsx(style.cardText, style.rating, 'm-0')}> 5.0 </p>
                    <Stars starsCount={5} />
                </div>
            </Card.Body>
        </Card>
    );
};
