import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconCard } from './IconCard';
import { cards } from './cardsData';

export const Cards: FC = () => {
    return (
        <Container className="my-lg-5">
            <Row className="g-3 row-cols-lg-3">
                {cards.map((card, idx) => (
                    <Col key={idx} xs={12} className="p-lg-3">
                        <IconCard {...card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
