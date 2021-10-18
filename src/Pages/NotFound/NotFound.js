import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-5'>
            <img className='img-fluid' src='https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png' alt="" />
            <br />
            <NavLink to='/home'>
                <button className='mt-4 bg-info rounded fs-4 border border-white text-white'>
                    Back to Home Page
                </button>
            </NavLink>
        </div>
    );
};

export default NotFound;