import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './TestiminialDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialDetails = ( { service } ) => {
    const { title, description, image } = service;
    return (
        <Card className='testimonial-container'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Link className='text-decoration-none' to="/singleitem">See More <span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
        </Card>
    );
};
export default TestimonialDetails;