import { ChangeEvent, ChangeEventHandler, FormEvent, SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import style from './ContactForm.module.scss';
function escapeHtml(unsafe: string) {
    return unsafe
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
interface FormData {
    name: string;
    email: string;
    message: string;
}

const sendData = (formData: FormData) => {
    fetch('http://localhost:3001/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(console.log);
};

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(name, email, msg);
        sendData({ name: escapeHtml(name), email: escapeHtml(email), message: escapeHtml(msg) });
    };

    const onChange = (setState: (x: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    };

    return (
        <Container>
            <Row className="pt-4 pb-lg-5">
                <Col lg={5}>
                    <h4 className="gray-subtitle">Kontakt</h4>
                    <h2 className="heading-h2 pb-3">Napisz do nas</h2>
                    <div className={style.formWrapper}>
                        <Form className="p-4" onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Imię i nazwisko</Form.Label>
                                <Form.Control
                                    className={style.control}
                                    type="text"
                                    placeholder="Wpisz imię i nazwisko"
                                    value={name}
                                    onChange={onChange(setName)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    className={style.control}
                                    type="email"
                                    placeholder="Wpisz e-mail"
                                    value={email}
                                    onChange={onChange(setEmail)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Wiadomość</Form.Label>
                                <Form.Control
                                    className={style.control}
                                    as="textarea"
                                    rows={5}
                                    placeholder="Napisz wiadomość"
                                    value={msg}
                                    onChange={onChange(setMsg)}
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
                </Col>
            </Row>
        </Container>
    );
};
