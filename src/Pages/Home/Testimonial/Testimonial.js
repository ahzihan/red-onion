import React from 'react';
import TestimonialDetails from '../Details/TestimonialDetails';

const Testimonial = () => {
    const services = [
        { id: 1, title: 'First Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', image: 'https://i.ibb.co/fvWq1j7/service1.png' },
        { id: 2, title: 'A Good Auto Responder', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', image: 'https://i.ibb.co/Xp3Xpk1/service2.png' },
        { id: 3, title: 'Home Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', image: 'https://i.ibb.co/BntYLML/service3.png' }
    ];
    return (
        <div className='mb-5'>
            <div className='container my-2'>
                <h4>Why You Choose Us</h4>
                <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus sint, dolores numquam blanditiis incidunt officia libero vero tempora fuga?</p>
            </div>
            <div className="container details-container my-4">
                {
                    services.map( service => <TestimonialDetails key={service.id} service={service}></TestimonialDetails> )
                }
            </div>
        </div>
    );
};

export default Testimonial;