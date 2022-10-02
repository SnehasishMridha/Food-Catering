//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// Contactless Delivery
const Received = () =>
{
    return(
      <section id="received" class="about-section received-section pt-150">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img received-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/received/received-img.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
            <div class="about-content received-content">
            <div class="section-title">
              <span class="wow fadeInUp" data-wow-delay=".2s">Contactless Delivery</span>
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".4s">On-time Delivery to Your Doorstep</h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">No need to worry during pandemic like situations. Our delivery partner will take all the safety precautions. </p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Received;
