import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// @ts-expect-error
import animation from '../../assets/animacja-rozmiary-magazynow.mp4';

import style from './Offer.module.scss';
import clsx from 'clsx';

export const Offer = () => (
    <Container fluid className={style.offerWrapper}>
        <Container>
            <Row>
                <Col>
                    <video className={clsx('object-fit-contain', style.animation)} autoPlay loop>
                        <source src={animation} />
                    </video>
                </Col>
                <Col className={style.flexContainer}>
                    <div>
                        <h3>Szeroki wybór rozmiarów</h3>
                        <h5 className={style.subtitle}>Koniecznie kliknij o poznaj ofertę</h5>
                        <Button className={style.button} variant="danger">
                            Sprawdz rozmiary
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
);
