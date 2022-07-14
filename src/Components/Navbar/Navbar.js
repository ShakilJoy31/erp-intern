import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import calender from './../icons/Vector (4).svg'; 
import plus from './../icons/Vector (5).svg'; 
import notification from './../icons/Vector (6).svg';  

const Navbar = () => {
    return (
        <div className='mx-4'>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <div>
                        <Link className='text-3xl text-purple-500' to='/'>ERP MODEL</Link>
                        <p>ULTIMATE BUSINESS ERP</p>
                    </div>
                </div>
                <div class="flex-none">     
                    <div class="block mx-auto">
                        <div class="flex">
                            <div className='mr-8 flex justify-center items-center'>
                            <img className='mr-6' src={calender} alt="" />

                                <img className='mr-6' src={plus} alt="" />

                                <img className='' src={notification} alt="" />
                            </div>
                            <div className='mr-4'>
                                <p>Welcome Staff Member</p>
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-xl text-purple-400'>Mr.Arnold Subhashnagar</h1>
                                    <i class="fa-solid fa-angle-down ml-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown dropdown-end mr-12">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-12 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                    </div>

                    
                    <div class="dropdown dropdown-end last-icon ml-5">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar mt-4">
                            <div class="w-10 rounded-full">
                            <i class="fa-solid fa-arrow-right-from-bracket text-3xl text-white"></i>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 