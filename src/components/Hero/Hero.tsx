import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// @ts-expect-error let's go
import heroVideo from '../../assets/animacja-na-gore-strony.mp4';
import style from './Hero.module.scss';

export const Hero = () => (
    <Container className={clsx('py-5')}>
        <Row className="d-flex align-items-center mobile-margin">
            <Col lg={6}>
                <h4 className={clsx(style.subHeading, 'heading-h4')}>Self storage Warszawa</h4>
                <h1>
                    Magazyny <br /> samoobsługowe
                </h1>
                <h3 className="gray-subtitle">Mikro magazyny juz od 1m3</h3>
                <h3 className="gray-subtitle">od 23423 za dzien</h3>
                <Button className="mt-3" variant="danger">
                    Sprawdz rozmiary
                </Button>
            </Col>
            <Col lg={6}>
                <video className={clsx(style.heroImg, 'object-fit-contain')} autoPlay loop>
                    <source src={heroVideo} />
                </video>
            </Col>
        </Row>
    </Container>
);
