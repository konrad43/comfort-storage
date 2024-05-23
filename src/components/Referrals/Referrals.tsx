import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { EmblaOptionsType } from 'embla-carousel';

import style from './Referrals.module.scss';
import { Carousel } from './Carousel/Carousel';
import { SLIDES } from './slides';

const OPTIONS: EmblaOptionsType = { loop: true };

export const Referrals = () => {
    return (
        <Container className={style.wrapper}>
            <Row>
                <div className={style.referralsHeader}>
                    <h3 className="heading-h3">Opinie z Google</h3>
                    <h4 className="gray-subtitle">Dołącz do grona zadowolonych klientów</h4>
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
