import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// @ts-expect-error let's go
import heroVideo from '../../assets/animacja-na-gore-strony-highres.mp4';
import style from './Hero.module.scss';

export const Hero = () => (
    <Container className={clsx('py-lg-5 pt-4')}>
        <Row className="d-flex align-items-center">
            <Col lg={6}>
                <h4 className={clsx(style.subHeading, 'heading-h4')}>Self storage Warszawa</h4>
                <h1 className="heading-h1">
                    Magazyny <br /> samoobsługowe
                </h1>
                <h3 className="gray-subtitle">Mikro magazyny już od 1 m³</h3>
                <h3 className="gray-subtitle">od 2,68 zł za dzień!</h3>
                <Button href="#" className="mt-3" variant="danger">
                    Sprawdź rozmiary
                </Button>
            </Col>
            <Col lg={6}>
                <video className={clsx(style.heroImg, 'object-fit-contain')} autoPlay loop muted>
                    <source src={heroVideo} />
                </video>
            </Col>
        </Row>
    </Container>
);
