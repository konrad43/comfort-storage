import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import caret from '../../assets/icons/caret.svg';

import { LatLng, StorageCard, storageCards } from './cards';
import { useEffect, useRef, useState } from 'react';
import { TopForm } from './TopForm';
import { mapStyles } from '../Map/map.config';

import style from './MapSection.module.scss';
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
                <Col xs={8} className="d-flex">
                    <Card.Body className="ps-4 my-auto">
                        <Card.Title>{city}</Card.Title>
                        <Card.Text className="gray-text">
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

            if (ref.current) {
                const newMap = new window.google.maps.Map(ref.current, {
                    center,
                    zoom
                });

                setMap(newMap);

                newMap.setOptions({ styles: mapStyles });

                storageCards.forEach(({ latLng }) => {
                    new Marker({
                        map: newMap,
                        position: latLng,
                        title: 'Magazyn'
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
                    <h3 className="heading-h3">Jesteśmy blisko Ciebie!</h3>
                    <h5 className="gray-subtitle">
                        Wpisz adres poniżej i sprawdź, która nasza placówka znajduje <br />
                        się najbliżej Ciebie lub wybierz z listy po prawej.
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
