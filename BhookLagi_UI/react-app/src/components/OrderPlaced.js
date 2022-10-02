//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'
import CNavBar from './CNavBar';
//OrderPlaced
const OrderPlaced = () => {
  return (
    <div>

    <CNavBar/>
    <br/>
    <br/>
    <br/>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div class="container">
         <center><h1>Order has been placed..!</h1></center> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderPlaced;


