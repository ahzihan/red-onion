import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CardStyle.css';

const DinnerDetails = ( { dinner } ) => {
    const navigate = useNavigate();
    const { id, title, description, price, image } = dinner;
    const handleDinner = id => {
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
                <Button onClick={() => handleDinner( id )} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default DinnerDetails;