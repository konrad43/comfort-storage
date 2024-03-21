import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconCard } from './IconCard';
import { cards } from './cardsData';

export const Cards: FC = () => {
    return (
        <Container className="my-5">
            <Row className="g-3 row-cols-lg-3">
                {cards.map(card => (
                    <Col xs={12} className="p-3">
                        <IconCard key={card.title} {...card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
