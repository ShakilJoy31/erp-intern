import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import calender from './../icons/Vector (4).svg';
import plus from './../icons/Vector (5).svg';
import notification from './../icons/Vector (6).svg';
import applicationLogo from './../icons/applicationLogo.svg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import logOut from './../icons/logOut icon.svg';

const Navbar = () => {
    const handleLogOut = () =>{
        toast.success('Log out successful'); 
    }
    return ( 
        <div className='mx-4 navbarIndex'>
            <div class="navbar bg-white">
                <div class="flex-1">
                    <div>
                        <Link className='text-3xl text-purple-500' to='/'>
                            <img src={applicationLogo} alt="" />
                        </Link>
                    </div>
                </div>
                <div class="flex-none">
                    <div class="block mx-auto">
                        <div class="flex">
                            <div className='flex items-center justify-center mr-8'>
                                <img className='mr-6' src={calender} alt="" />

                                <img className='mr-6' src={plus} alt="" />

                                <img className='' src={notification} alt="" />
                            </div>
                            <div className='mr-4'>
                                <p>Welcome Staff Member</p>
                                <div className='flex items-center justify-center'>
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
                            <label for="my-modal-3" tabindex="0" class="btn modal-button btn-ghost btn-circle avatar">
                                <img className='mt-2 ml-6 svg-logout-icon' src={logOut} alt="" />
                            </label>
                        </div>


                </div>
            </div>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    
                    <h3 class="text-red-600 flex justify-center text-3xl font-bold">Do you want to log out?</h3>
                    <div className='mt-8'>
                        <div className='flex justify-around'>
                        <label onClick={handleLogOut} for="my-modal-3" class="btn btn-outline w-48 btn-error">Yes</label>
                        <label for="my-modal-3" class="btn btn-outline w-48 btn-success">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar; 