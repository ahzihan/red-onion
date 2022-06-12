import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CardStyle.css';

const LunchDetails = ( { lunch } ) => {
    const { id, title, description, price, image } = lunch;
    const navigate = useNavigate();
    const handleLunch = id => {
        navigate( `/SingleItem/${ id }` );
    };
    return (
        <Card className='card-container'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>Price: ${price}</Card.Text>
                <Button onClick={() => handleLunch( id )} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default LunchDetails;