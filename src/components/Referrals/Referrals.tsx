import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { EmblaOptionsType } from 'embla-carousel';

import style from './Referrals.module.scss';
import { Carousel } from './Carousel/Carousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Referrals = () => {
    return (
        <Container className={style.wrapper}>
            <Row>
                <div className={style.referralsHeader}>
                    <h3>Opinie z Google</h3>
                    <h4>Dołącz do grona zadowolonych klientów</h4>
                    <Button className="mt-2" variant="danger">
                        Rezerwuj teraz
                    </Button>
                </div>
            </Row>
            <Row>
                <Carousel slides={SLIDES} options={OPTIONS} />
            </Row>
        </Container>
    );
};
