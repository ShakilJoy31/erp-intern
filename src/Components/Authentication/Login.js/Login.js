import React from "react";
import { Link } from "react-router-dom";
import meetingLogin from './../../icons/pana.svg';
import './Login.css'; 

const Login = () => {
  return (
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
              <input
                type="text"
                placeholder="Email or Phone Number"
                class="input w-full max-w-lg my-[25px] login-input"
              />

              <div class="form-control w-full max-w-">
              <input
                type="text"
                placeholder="Password"
                class="input w-full max-w-lg login-input"
              />
                <label class="label flex justify-end">
                  <span class="label-text-alt forget-password forHover mb-[20px] mt-[12px]">Forget Password</span>
                </label>
              </div>
            </div>
            <div>
            <button class="btn w-full mt-2 login-button">Login</button>
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
    </div>
  );
};

export default Login;
