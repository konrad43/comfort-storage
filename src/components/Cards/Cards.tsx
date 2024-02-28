import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconCard } from './IconCard';

export const Cards: FC = () => {
    const cards = Array.from(new Array(6), (x, i) => i);
    return (
        <Container>
            <Row className="g-3">
                {cards.map(card => (
                    <Col lg={4} xs={12} className="p-3">
                        <IconCard key={card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
