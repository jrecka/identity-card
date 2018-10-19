import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div>
        <div className='blurred-bg'></div>
        <div className='links container'>
            <p className='greeting'><span className='greeting-part'>Hello!</span> This page allows you to fill
                out an ID card application without leaving your home.
            </p>
            <Link to="/idApplicationForm"
                  className='link lin'>FILL REQUEST</Link>
            <Link to='/applicationsList'
                  className='link'>REQUESTS LIST</Link>
        </div>
    </div>
);

export default HomePage;