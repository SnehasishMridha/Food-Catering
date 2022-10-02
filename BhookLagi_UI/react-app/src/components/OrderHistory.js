//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

const OrderHistory = () => {
    return (
      <>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h2> OrderHistory </h2>
  
            <div class="row container">
              <div class="row-2">
                <div class="column">
                  <div class="card">
                    <img
                      src="assets\img\post\samosa.jpg"
                      className="card-img-top"
                      alt="samosa"
                    />
                    <h4 class="card-title">samosa</h4>
                    <p>Some text</p>
                    <a
                      href="https://play.google.com/store/apps"
                      class="main-btn-2"
                    >
                      View
                    </a>
                  </div>
                </div>
  
                <div className="column">
                  <div className="card">
                    <img
                      src="assets\img\post\palak.jpg"
                      className="card-img-top"
                      alt="palak"
                    />
                    <h4 class="card-title">palak-paneer</h4>
                    <p>Some text</p>
                    <a
                      href="https://play.google.com/store/apps"
                      class="main-btn-2"
                    >
                      View
                    </a>
                  </div>
                </div>
  
                <div className="column">
                  <div className="card">
                    <img
                      src="assets\img\post\biryani.jpg"
                      className="card-img-top"
                      alt="biryani"
                    />
                    <h4 class="card-title">biryani</h4>
                    <p>Some text</p>
                    <a
                      href="https://play.google.com/store/apps"
                      class="main-btn-2"
                    >
                      View
                    </a>
                  </div>
                </div>
  
                <div className="column">
                  <div className="card">
                    <img
                      src="assets\img\post\noodles.jpg"
                      className="card-img-top"
                      alt="noodles"
                    />
                    <h4 class="card-title">noodles</h4>
                    <p>Some text</p>
                    <a
                      href="https://play.google.com/store/apps"
                      class="main-btn-2"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default OrderHistory;
