import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { Map } from '../Map/Map';

const HorizontalCard = () => (
    <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
);

export const MapSection = () => (
    <Container className="my-5">
        <Row>
            <Col lg={8} xs={12}>
                <h4>Jesteśmy blisko Ciebie!</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sem
                    vitae sem porta, ac tempor ex gravida.{' '}
                </p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label hidden>Address</Form.Label>
                        <Form.Control type="text" placeholder="wpisz adres..." />
                        <Button variant="danger">Szukaj</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col lg={8} xs={12}>
                <Map />
            </Col>
            <Col lg={4} xs={12}>
                <HorizontalCard />
                <HorizontalCard />
            </Col>
        </Row>
    </Container>
);
