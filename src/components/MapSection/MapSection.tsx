import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import caret from '../../assets/icons/caret.svg';

import { LatLng, StorageCard, storageCards } from './cards';
import style from './MapSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import { TopForm } from './TopForm';
import { mapStyles, places } from '../Map/map.config';

interface HorizontalCardProps extends StorageCard {
    onClick: (card: StorageCard) => void;
}

const HorizontalCard = (props: HorizontalCardProps) => {
    const { onClick, ...cardData } = props;
    const { city, address, zipCode, image } = cardData;
    return (
        <Card className={clsx('mb-2', style.horizontalCard)} onClick={() => onClick(cardData)}>
            <Row className="g-0">
                <Col xs={4}>
                    <Image className={style.cardImage} src={image} />
                </Col>
                <Col xs={8}>
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
    const [map, setMap] = useState<google.maps.Map>();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function getMap() {
            const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
            const { Marker } = (await google.maps.importLibrary(
                'marker'
            )) as google.maps.MarkerLibrary;

            console.log('🚀 ~ ref:', ref);
            if (ref.current) {
                const newMap = new window.google.maps.Map(ref.current, {
                    center,
                    zoom
                });

                setMap(newMap);

                newMap.setOptions({ styles: mapStyles });

                places.forEach(position => {
                    new Marker({
                        map: newMap,
                        position: position,
                        title: 'Elo'
                    });
                });
            }
        }
        getMap();
    }, []);

    const centerMap = (latLng: LatLng) => {
        if (!map) {
            return;
        }
        map.setCenter(latLng);
        map.setZoom(13);
    };

    const onClick = (cardData: StorageCard) => {
        centerMap(cardData.latLng);
    };

    return (
        <Container className="my-5" id="locations">
            <Row>
                <Col lg={8} xs={12}>
                    <h3>Jesteśmy blisko Ciebie!</h3>
                    <h5 className="gray-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sem
                        vitae sem porta, ac tempor ex gravida.{' '}
                    </h5>
                    <TopForm centerMap={centerMap} map={map} />
                </Col>
            </Row>
            <Row>
                <Col lg={8} xs={12}>
                    <div className={style.map} ref={ref} id="map" />
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
