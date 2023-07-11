import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/img/logo/loder.png";
import BgVideo from "../../assets/img/login-bg.mp4";

export default () => {
  const navigate = useNavigate();
  return (
    <div className="login_form_bg">
      <video src={BgVideo} loop autoPlay muted />
      <div className="signIn w-full  flex justify-center items-center">
        <div class="login-form">
          <div class="logo-login">
            <a href="#">
              <img src={Img} alt="" />
            </a>
          </div>
          <h2>Login Here</h2>
          <div class="form-input">
            <label for="name">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-input">
            <label for="name">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div class="form-input pt-30">
            <input type="submit" name="submit" value="login" />
          </div>

          <a href="#" class="forget">
            Forget Password
          </a>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="registration"
          >
            Registration
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
