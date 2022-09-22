//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'
import CNavBar from "./CNavBar";
//Cart Page
const Cart = () => {
    return(
      <div> <CNavBar />
      <div className="auth-wrapper">
        <div className="auth-inner">
       
          <h2>CART</h2>

          <div class = "container border border-secondary">
            <pre>
              <h4>1. Samosa - </h4>
               <h4>Homemaker Name</h4>
              <h5>Quantity : 1 <br/> Price :&#x20b9;210</h5>
               
               <hr></hr>
               <h4>2. Noodle - </h4>
               <h4>Homemaker Name</h4>
              <h5>Quantity : 1 <br/> Price : &#x20b9;290</h5>
  
              <hr></hr>
              <h5>Total Price: &#x20b9;500</h5>
  
            </pre>
          </div>
          <div>
          <button type="button" class="btn btn-success">
                Place Order Now
              </button>
          </div>
  
        </div>
        </div>
        </div>
    );
  };

export default Cart;
