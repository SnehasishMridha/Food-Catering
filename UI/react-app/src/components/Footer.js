//import logo from "./logo.svg";
import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// Footer
const Footer = () => {
    return (
      <footer id="footer" class="footer pt-100 pb-70">
        <div class="footer-shape">
          <img
            src="assets/img/footer/footer-left.svg"
            alt=""
            class="shape shape-1"
          />
          <img
            src="assets/img/footer/footer-right.svg"
            alt=""
            class="shape shape-2"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div class="logo">
                  <a href="#home">
                    <img src="assets/img/logo/logo-2.jpg" alt="logo" />
                  </a>
                </div>
                <div class="download-btns">
                  <a href="https://www.apple.com/in/app-store/">
                    <span class="icon">
                      <i class="lni lni-apple"></i>
                    </span>
                    <span class="text">
                      Download on the <b>App Store</b>{" "}
                    </span>
                  </a>
                  <a href="https://play.google.com/store/apps">
                    <span class="icon">
                      <i class="lni lni-play-store"></i>
                    </span>
                    <span class="text">
                      GET IT ON <b>Play Store</b>{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
                <h3>About Us</h3>
                <ul class="links">
                  <li>
                    {/*<a href="#home">Home</a>*/}
                    <Link to={"/home"}>
                      {/*home*/}
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
                <h3>Contact Us</h3>
                <ul class="links">
                  <li>
                    <a href="https://www.w3.org/Provider/Style/dummy.html">
                      Help &#38; Support
                    </a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/Provider/Style/dummy.html">
                      Partner with us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.w3.org/Provider/Style/dummy.html">
                      Ride with us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
