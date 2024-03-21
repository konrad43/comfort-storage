import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import style from './PhotoSection.module.scss';
import { Rect } from '../../layout/Rect';

export const PhotoSection = () => (
    <Container className="py-5">
        <Row>
            <h3>Zobacz jak wyglądają nasze magazyny</h3>
        </Row>
        <Row className={style.photoHeight}>
            <Col lg={6}>
                <Rect />
            </Col>
            <Col lg={3}>
                <Rect />
            </Col>
            <Col lg={3}>
                <Rect />
            </Col>
        </Row>
        <Row className={style.photoHeight}>
            <Col lg={3}>
                <Rect />
            </Col>
            <Col lg={3}>
                <Rect />
            </Col>
            <Col lg={6}>
                <Rect />
            </Col>
        </Row>
    </Container>
);
