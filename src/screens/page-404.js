import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

export default function Page404() {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div style={{ width: 'fit-content' }}>
                <p className='display-6'>Page Not Found</p>
                <Link to='/'>Goto Home</Link>
            </div>
        </div>
    );
}