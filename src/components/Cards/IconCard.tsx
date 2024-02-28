import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import icon from '../../assets/icon-placeholder.png';

export const IconCard = () => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Image src={icon} />
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
            </Card.Text>
        </Card.Body>
    </Card>
);
