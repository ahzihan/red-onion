import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './CardStyle.css';

const BreakfastDetails = ( { breakfast } ) => {
    const { title, description, price, image } = breakfast;
    return (
        <Card className='card-container'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>Price: ${price}</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default BreakfastDetails;