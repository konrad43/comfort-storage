import { ChangeEvent, SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import { Bounce, ToastOptions, toast } from 'react-toastify';
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

const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce
};

const sendData = async (formData: FormData) => {
    try {
        await fetch('/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);

            res.status === 200
                ? toast.success('Dziękujemy za przesłanie formularza', toastConfig)
                : toast.error('Przesyłanie formularza nie powiodło się', toastConfig);
        });
    } catch (error) {
        toast.error('Przesyłanie formularza nie powiodło się', toastConfig);
    }
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
                                    required
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
                                    required
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
                                    required
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
