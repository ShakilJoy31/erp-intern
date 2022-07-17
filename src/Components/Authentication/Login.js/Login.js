import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ backgroundColor: "#E5E5E5" }}
      className="flex justify-center w-full min-h-screen"
    >
      <div class="">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
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
                class="input w-full max-w-lg my-[25px]"
              />

              <input
                type="text"
                placeholder="Password"
                class="input w-full max-w-lg"
              />
            </div>
            <button>
              <Link to="/dashboard">Submit</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
