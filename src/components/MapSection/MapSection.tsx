import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';

import search from '../../assets/icons/search.svg';
import caret from '../../assets/icons/caret.svg';

import { Map } from '../Map/Map';
import { StorageCard, storageCards } from './cards';
import style from './MapSection.module.scss';
import { useState } from 'react';

interface HorizontalCardProps extends StorageCard {
    onClick: (card: StorageCard) => void;
}

const HorizontalCard = (props: HorizontalCardProps) => {
    const { onClick, ...cardData } = props;
    const { city, address, zipCode, image } = cardData;
    return (
        <Card className={clsx('mb-2', style.horizontalCard)} onClick={() => onClick(cardData)}>
            <Row className="g-0">
                <Col md={4}>
                    <Image className={style.cardImage} src={image} />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{city}</Card.Title>
                        <Card.Text>
                            {address},
                            <br />
                            {zipCode} {city}
                        </Card.Text>
                        <div className="mt-3">
                            <Button className={clsx(style.cardButton)} variant="link">
                                Rezerwuj teraz
                            </Button>
                            <Image src={caret} />
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export const MapSection = () => {
    const [center, setCenter] = useState({ lat: 52.1691494, lng: 20.9525033 });
    const [zoom, setZoom] = useState(11);

    const onClick = (cardData: StorageCard) => {
        console.log('🚀 ~ cardData:', cardData);
    };

    return (
        <Container className="my-5">
            <Row>
                <Col lg={8} xs={12}>
                    <h3>Jesteśmy blisko Ciebie!</h3>
                    <h5 className="gray-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sem
                        vitae sem porta, ac tempor ex gravida.{' '}
                    </h5>
                    <Form className="my-4">
                        <Form.Group className="mb-3 d-flex" controlId="map-form">
                            <Form.Label hidden>Address</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="wpisz adres..." />
                                <InputGroup.Text>
                                    <Image src={search} />
                                </InputGroup.Text>
                            </InputGroup>
                            <Button className="mx-2" variant="danger">
                                Szukaj
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col lg={8} xs={12}>
                    <Map center={center} zoom={zoom} />
                </Col>
                <Col lg={4} xs={12}>
                    {storageCards.map(card => (
                        <HorizontalCard key={card.address} {...card} onClick={onClick} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};
