//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

//Consumer OrderSummary
const OrderSummary = () => {
  return (
    <div class="row-1">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div class="row container align-items-left">
            <ul class="list-group  align-self-left">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Samosa --- &#x20b9;210
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Veg-Thali --- &#x20b9;550
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Veg-Crisp-Burger --- &#x20b9;350
                <span class="badge badge-primary badge-pill"> </span>
              </li>
            </ul>
          </div>
        
      {/*Deliver Address Selection */}
      <div class="container">
        
            <div class="row-1">
              
                <ul class="list-group">
                  <li class="list-group-item  align-items-left">
                    <li>Delivery Address</li>
                  </li>
                </ul>

                {/*Consumer Place Order & Total*/}
                <div >
                      <pre><li><h5>
                         TOTAL Price:  &#x20b9;1110
                        <br/>Payment:  COD(Cash On Delivery)
                      </h5>
                      </li>
                      </pre>

                      <button type="button" class="btn btn-success">
                        PlaceOrder
                      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OrderSummary;
