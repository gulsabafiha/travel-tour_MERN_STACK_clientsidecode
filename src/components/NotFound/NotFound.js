import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src='https://i.pinimg.com/originals/2a/21/1f/2a211fde05b083a179158e2d3daaa7d3.jpg' alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;