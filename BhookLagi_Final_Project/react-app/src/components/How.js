//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// How It Works
const How = () => {
    return (
      <section id="how" class="delivery-section pt-150">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="delivery-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    Fast Delivery
                  </span>
                  <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">
                    Order Now, Recieve Within 30 mins
                  </h1>
                  <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">
                    We have tie-up with reputed delivery partner with outstanding
                    delivery history.
                  </p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn btn-hover wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7 order-first order-lg-last">
              <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/delivery/delivery-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default How;
