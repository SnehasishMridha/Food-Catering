//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// Consumer User Profile
const CProfile = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Consumer User Profile</h3>
          <div className="mb-3 d-grid">
            <button type="submit" className="main-btn-2 form-control ">
              {/*btn btn-primary*/}
              Create Home-maker Profile / Import data from Home-maker Profile
            </button>
          </div>
          {/*<div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="flexRadioDefault1">
                 Home maker
                </label>
            </div>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" /> {/*checked
                <label for="flexRadioDefault2">
                 Consumer
                </label>
            </div><br/>*/}
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Mobile number (10 digits only)</label>
            <input
              type="number"
              className="form-control"
              placeholder="+91-********** from database"
              min="7000000000"
              max="9999999999"
              required
            />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="email id from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Address </label>
            <small> (max. 255 chars)</small>
            {/*<input type="text" className="form-control" placeholder="Enter complete address" />*/}
            <textarea
              class="form-control"
              id="exampleFormControlTextarea"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label>PIN code</label>
            <input
              type="number"
              className="form-control"
              placeholder="PIN code from database"
              min="100000"
              max="9999999"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" className="form-label">
              Upload your photo
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          {/*<div className="mb-3"><small>Fields marked with * are mandatory</small></div>*/}
          <div className="d-grid">
            <button type="submit" className="main-btn-2 ">
              {/*btn btn-primary*/}
              Save &#38; Update
            </button>
          </div>
          {/*<p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>*/}
        </form>
      </div>
    </div>
  );
};

export default CProfile;
