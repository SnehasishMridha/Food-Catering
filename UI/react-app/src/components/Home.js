//import logo from "./logo.svg";
import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'
import Services from "./Services";
import About from "./About";
import How from "./How";
import Received from "./Received";

// Home page
const Home = () => {
    return (
      <div>
        <section id="home" class="hero-section">
          <div class="hero-shape">
            <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="hero-content">
                  <h1 class="wow fadeInUp" data-wow-delay=".2s">
                    Delicious Home-made Food <span>At Your Doorstep</span>{" "}
                  </h1>
                  <p class="wow fadeInUp" data-wow-delay=".4s">
                    Register with us and have the yummiest homemade food at your
                    door now.
                  </p>
                  <div className="d-grid">
                    <li class="nav-item">
                      <Link
                        className="nav-link"
                        to={"/Posting"}
                        class="main-btn btn-hover wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        Home-Maker
                      </Link>
                      &nbsp;
                      <Link
                        className="nav-link"
                        to={"/Foodlist"}
                        class="main-btn btn-hover wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        Consumer
                      </Link>
                      
                    </li>
                  </div>
                </div>
              </div>
             
              <div class="col-lg-6">
                <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                  <img src="assets/img/hero/hero-img.svg" alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <Services />
        <About />
        <How />
        <Received/>
      </div>
    );
  };

export default Home;
