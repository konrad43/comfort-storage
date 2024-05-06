import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// @ts-expect-error
import animation from '../../assets/animacja-rozmiary-magazynow.mp4';

import style from './Offer.module.scss';
import clsx from 'clsx';

const subtitle = 'Koniecznie kliknij w przycisk poniżej i poznaj naszą dokładną ofertę.';

export const Offer = () => (
    <Container fluid className={style.offerWrapper}>
        <Container>
            <Row>
                <Col lg={6}>
                    <video className={clsx('object-fit-contain', style.animation)} autoPlay loop>
                        <source src={animation} />
                    </video>
                </Col>
                <Col className={style.flexContainer} lg={6}>
                    <div>
                        <h3 className="heading-h3">Szeroki wybór rozmiarów</h3>
                        <h5 className={(style.subtitle, 'heading-h5')}>{subtitle}</h5>
                        <Button className={style.button} variant="danger">
                            Sprawdz rozmiary
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
);
