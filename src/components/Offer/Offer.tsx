import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// @ts-expect-error
import animation from '../../assets/animacja-rozmiary-magazynow.mp4';

import style from './Offer.module.scss';
import clsx from 'clsx';
import { reservationLink } from '../../constants';

const subtitle1 = 'Kliknij w przycisk poniżej';
const subtitle2 = 'i poznaj naszą dokładną ofertę.';

export const Offer = () => (
    <Container fluid className={style.offerWrapper}>
        <Container>
            <Row>
                <Col xxl={6} lg={7}>
                    <video
                        className={clsx('object-fit-contain', style.animation)}
                        playsInline
                        muted
                        autoPlay
                        loop>
                        <source src={animation} />
                    </video>
                </Col>
                <Col className={style.flexContainer} xxl={6} lg={5}>
                    <div>
                        <h3 className="heading-h3">Szeroki wybór rozmiarów</h3>
                        <h5 className={(style.subtitle, 'heading-h5')}>{subtitle1}</h5>
                        <h5 className={(style.subtitle, 'heading-h5')}>{subtitle2}</h5>
                        <Button
                            className={style.button}
                            variant="danger"
                            href={reservationLink}
                            target="_blank">
                            Sprawdz rozmiary
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
);
