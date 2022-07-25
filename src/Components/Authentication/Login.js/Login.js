import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import LoginNavbar from "../../Navbar/LoginNavbar";
import meetingLogin from './../../icons/pana.svg';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassWord] = useState('');
  const navigate = useNavigate(); 

  const handleEmail = (event) =>{
    setEmail(event.target.value); 
  }
  const handlePassword = (event) =>{
    setPassWord(event.target.value);  
  }
  const handleLogin = () =>{
    if(email==='admin@gmail.com' && password==='admin'){
      navigate('/dashboard'); 
    }
    else{
      toast.error('Invalid Email or Password'); 
    }
  } 
  
  return (
    <div>
      <LoginNavbar></LoginNavbar>
      <div
      style={{ backgroundColor: "#E5E5E5" }}
      className="flex justify-center w-full min-h-screen background-login-image"
    >
      <div>
        <div class="hero-content">
          <div className='input-field-get-position'>
            <h1
              style={{
                color: "#366E83",
                fontFamily: "Nunito",
                fontFamily: "Nunito",
                fontSize: "36px",
                width: "257px",
                height: "49px",
              }}
              class="font-bold"
            >
              Welcome Back
            </h1>
            <p
              style={{
                color: "#366E83",
                fontFamily: "Nunito",
                fontSize: "24px",
                width: "360px",
                height: "33px",
              }}
              class=""
            >
              We are happy to have you back!
            </p>

            <div>
              <input onBlur={handleEmail}
                type="text"
                placeholder="Email or Phone Number"
                class="input w-full max-w-lg my-[25px] login-input" required
              />

              <div class="form-control w-full max-w-">
              <input onBlur={handlePassword}
                type="password"
                placeholder="Password"
                class="input w-full max-w-lg login-input" required
              />
                <label class="label flex justify-end">
                  <span class="label-text-alt forget-password forHover mb-[20px] mt-[12px]">Forget Password</span>
                </label>
              </div>
            </div>
            <div>
            <button onClick={handleLogin} class="btn w-full mt-2 login-button">Login</button>
            </div>
          </div>

          <div className='mb-[331px] mt-[159px] ml-[170px]'>
          <img
            src={meetingLogin}
            class="max-w-sm rounded-lg shadow-2xl login-picture"
            alt='' />
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    </div>
  );
};

export default Login;
