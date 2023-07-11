import React from "react";
import Img from "../../assets/img/logo/loder.png";
import { useNavigate } from "react-router-dom";

import BgVideo from "../../assets/img/login-bg.mp4";

export default () => {
  const navigate = useNavigate();
  return (
    <div className="login_form_bg">
      <video src={BgVideo} loop autoPlay muted />

      <div className="signUp w-full  flex justify-center items-center">
        <div className="login-form ">
          <div class="logo-login">
            {/* <a href="#">
              <img src={Img} alt="" />
            </a> */}
          </div>
          <h2>Registration Here</h2>
          <div class="form-input">
            <label for="name">Full name</label>
            <input type="text" name="name" placeholder="Full name" />
          </div>
          <div class="form-input">
            <label for="name">Email Address</label>
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div class="form-input">
            <label for="name">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div class="form-input">
            <label for="name">Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </div>
          <div class="form-input pt-30">
            <input type="submit" name="submit" value="Registration" />
          </div>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            class="registration"
          >
            login
          </button>
          <button
            className="registration"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
