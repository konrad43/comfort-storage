import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import img from '../../assets/magazyn-duzy.png';

import style from './ContactForm.module.scss';

export const ContactForm = () => {
    return (
        <Container>
            <Row className="pt-4 pb-lg-5">
                <Col lg={5}>
                    <h4 className="gray-subtitle">Kontakt</h4>
                    <h2 className="heading-h2 pb-3">Napisz do nas</h2>
                    <div className={style.formWrapper}>
                        <Form className="p-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Imię i nazwisko</Form.Label>
                                <Form.Control
                                    className={style.control}
                                    type="text"
                                    placeholder="Wpisz imię i nazwisko"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    className={style.control}
                                    type="email"
                                    placeholder="Wpisz e-mail"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Wiadomość</Form.Label>
                                <Form.Control
                                    className={style.control}
                                    as="textarea"
                                    rows={5}
                                    placeholder="Napisz wiadomość"
                                />
                            </Form.Group>
                            <div className={style.button}>
                                <Button variant="danger" type="submit" className="float-sm-end">
                                    Wyślij
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className={clsx(style.image, 'ms-lg-4')}></div>
                    {/* <Image className={clsx('ms-lg-5', style.image)} src={img} /> */}
                </Col>
            </Row>
        </Container>
    );
};
