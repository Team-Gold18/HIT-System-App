import React from "react";
import "../styles/Register.css";
import backgroundImage from "../components/images/bg.jpg";


export default function Login() {
  return (
    <div className="container">
      <img className="bgImage" src={backgroundImage} alt="" />
      <div className="card">
        <div className="form_login">
          <div className="card-header">Sign In</div>
          <form>
            <div className="card-body">
              <div className="group">
                <label className="label">User Name</label>
                <input className="input" type="text" />
              </div>
              <div className="group">
                <label className="label">Password</label>
                <input className="input" type="password" />
              </div>
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
