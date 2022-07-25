import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import erpModel from './../icons/ERP MODEL.svg';
import unlimitedBusiness from './../icons/ULTIMATE BUSINESS ERP.svg';
import './Navbar.css'; 

const LoginNavbar = () => {
    return ( 
        <div className='navbarIndex navbar-shadow'>
            <div class="navbar">
                <div class="flex-1">
                    <div>
                        <Link className='text-3xl mb-10 text-purple-500' to='/'>
                            <img className='ml-8' src={erpModel} alt="" />

                            <img className='ml-8' src={unlimitedBusiness} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginNavbar; 