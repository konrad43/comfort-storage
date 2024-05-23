import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import clsx from 'clsx';

import star from '../../../assets/icons/star.svg';
import style from './CarouselCard.module.scss';
import { FC } from 'react';

const Icon = (props: { text: string }) => {
    const { text } = props;
    return <div className={clsx(style.icon, 'mt-2')}>{text}</div>;
};

const Stars = (props: { starsCount: number }) => {
    const { starsCount } = props;
    const starIcons = Array.from({ length: starsCount }, () => 0).map((_, idx) => (
        <Image src={star} key={idx} />
    ));
    return <>{starIcons}</>;
};

export type Slide = {
    name: string;
    desc: string;
    date?: string;
};

export const CarouselCard: FC<{ slide: Slide }> = ({ slide }) => {
    const { name, desc, date } = slide;
    const firstLetter = name.at(0)?.toUpperCase() || 'X';
    return (
        <Card className="mx-2">
            <Card.Body>
                <div className={style.iconWrapper}>
                    <Icon text={firstLetter} />
                    <p className={clsx(style.cardText, style.date)}>{date || '01/01/2024'}</p>
                </div>
                <h6 className={clsx(style.cardTitle, 'pt-2')}>{name}</h6>
                <Card.Text className={clsx('cardText', style.cardBody)}>{desc}</Card.Text>
                <div className={style.stars}>
                    <p className={clsx(style.cardText, style.rating, 'm-0')}> 5.0 </p>
                    <Stars starsCount={5} />
                </div>
            </Card.Body>
        </Card>
    );
};
