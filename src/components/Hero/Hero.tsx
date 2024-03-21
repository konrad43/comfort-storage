import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// @ts-expect-error let's go
import heroVideo from '../../assets/animacja-na-gore-strony.mp4';
import styles from './Hero.module.scss';

export const Hero = () => (
    <Container className="py-5">
        <Row className="d-flex align-items-center">
            <Col lg={6}>
                <h2>Self storage Warszawa</h2>
                <h1>
                    Magazyny <br /> samoobsługowe
                </h1>
                <h3>Mikro magazyny juz od 1m3</h3>
                <h3>od 23423 za dzien</h3>
                <Button variant="danger">Sprawdz rozmiary</Button>
            </Col>
            <Col lg={6}>
                <video className={clsx(styles.heroImg, 'object-fit-contain')} autoPlay loop>
                    <source src={heroVideo} />
                </video>
            </Col>
        </Row>
    </Container>
);
