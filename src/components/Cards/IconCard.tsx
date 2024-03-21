import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import style from './Cards.module.scss';

export interface IconCardProps {
    icon: string;
    title: string;
    desc: string;
}

export const IconCard = (props: IconCardProps) => {
    const { icon, title, desc } = props;
    return (
        <Card className="">
            <Card.Body>
                <Image src={icon} />
                <Card.Title className={style.title}>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    );
};
