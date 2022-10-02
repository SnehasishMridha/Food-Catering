//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// Services
const Services = () => {
    return (
      <section id="services" class="service-section pt-150">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="section-title text-center mb-70">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Delivery Services
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  All Essentials You Need
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img src="assets/img/service/service-icon-2.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Pure Vegetarian</h3>
                  <p>We serve pure veg dishes as per your need.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img src="assets/img/service/service-icon-1.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Eggitarian</h3>
                  <p>
                    Do you love chicken eggs? We serve delicious egg dishes as
                    well.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img src="assets/img/service/service-icon-1.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Non-Vegeterian</h3>
                  <p>
                    Welcome also serve non veg dishes like mutton, chicken and
                    seafood as per your need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Services;
