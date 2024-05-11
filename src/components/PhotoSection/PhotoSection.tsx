import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import style from './PhotoSection.module.scss';
import { Rect } from '../../layout/Rect';

import photo1 from '../../assets/gallery/gal-1.png';
import photo2 from '../../assets/gallery/gal-2.png';
import photo3 from '../../assets/gallery/gal-3.png';
import photo4 from '../../assets/gallery/gal-4.png';
import photo5 from '../../assets/gallery/gal-5.png';
import photo6 from '../../assets/gallery/gal-6.png';

export const PhotoSection = () => (
    <Container className="py-5">
        <Row>
            <h3 className={clsx(style.h3, 'heading-h3')}>Zobacz jak wyglądają nasze magazyny</h3>
        </Row>
        <Row className={style.photoWrapper}>
            <Col lg={6} className={style.photoHeight}>
                {/* <Image src={photo1} /> */}
                <div className={clsx(style.image, style.img1)}></div>
                {/* <Image src={photo1} className={style.image} /> */}
            </Col>
            <Col lg={3} xs={6} className={style.photoHeight}>
                <div className={clsx(style.image, style.img2)}></div>

                {/* <Image src={photo2} /> */}
            </Col>
            <Col lg={3} xs={6} className={style.photoHeight}>
                <div className={clsx(style.image, style.img3)}></div>
                {/* <Image src={photo3} /> */}
            </Col>
        </Row>
        <Row className={style.photoWrapper}>
            <Col lg={3} xs={6} className={style.photoHeight}>
                <div className={clsx(style.image, style.img4)}></div>
                {/* <Image src={photo4} /> */}
            </Col>
            <Col lg={3} xs={6} className={style.photoHeight}>
                <div className={clsx(style.image, style.img5)}></div>
                {/* <Image src={photo5} /> */}
            </Col>
            <Col lg={6} className={style.photoHeight}>
                <div className={clsx(style.image, style.img6)}></div>
                {/* <Image src={photo6} /> */}
            </Col>
        </Row>
    </Container>
);
