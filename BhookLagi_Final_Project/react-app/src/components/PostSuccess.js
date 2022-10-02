//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'
import HMNavBar from './HMNavBar';
//Post success
const PostSuccess = () => {
  return (
    <div><HMNavBar/>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Posted Successfully</h3>
        <div className="d-grid">
          <li class="nav-item">
            <Link
              className="nav-link"
              to={"/PostPage"}
              class="main-btn btn-hover wow fadeInUp"
              data-wow-delay=".6s"
            >
              Take Me to My Post
            </Link>
          </li>
        </div>
      </div>
    </div></div>
  );
}

export default PostSuccess;
