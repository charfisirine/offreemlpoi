import React from "react";
import connexion from "../../assets/connexion.jpg";
import { MdCardTravel } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "./connexion.css";

const Connexion = () => {
  return (
    <div>
      <div className="multibox">
        <div className="leftBox">
          <img src={connexion} className="leftimg" />
        </div>

        <div className="righttBox">
          <div className="logo flex">
            <h1>
              <MdCardTravel className="icon" />
              Offre Emploi
            </h1>
          </div>
          <div>
            <h3 className="subtitle">
              Welcome to Offre Emploi!👋🏻
            </h3>
          </div>
          <div className="top-distance">
            <p className="paragraph">
              Please sign-in to your account and start the adventure
            </p>
          </div>
          <form>
            <div className="form-group inputBox ">
              <label htmlFor="email" className="label-form">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="user@gmail.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label-form">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="*****"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <div>
              <button type="submit" className=" btn-connexion">
                SIGN IN
              </button>
            </div>
            <div className="top-distance">
              <p className="new top-distance">
                New on our platform? <a href="/inscription">Create an account</a>
              </p>
            </div>

            <div className="separator">
              <span className="separator-line"></span>
              <span className="separator-text">or</span>
              <span className="separator-line"></span>
            </div>
            <div className="google top-distance">
              <a href="#" className="btn-google">
                <FcGoogle className="icon" />
                Continuer avec Google
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
