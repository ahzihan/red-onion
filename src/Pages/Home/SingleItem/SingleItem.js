import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../Shared/Menu/Menu';

const SingleItem = () => {
    const { id } = useParams();
    console.log( id );
    return (
        <div>
            <Menu></Menu>
            <h3>Product Id: {id}</h3>
        </div>
    );
};

export default SingleItem;