//import logo from "./logo.svg";
import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// About us
const About = () => {
    return (
      <section id="about" class="about-section pt-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/about/about-img.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    About Us
                  </span>
                  <h1 class="wow fadeInUp" data-wow-delay=".4s">
                    On-time Delivery and Customer Satisfaction
                  </h1>
                  <p class="wow fadeInUp" data-wow-delay=".6s">
                    Our website allows you to select from various Home-made foods
                    that have been posted by the Home-makers. The Home-makers get
                    the liberty to post an advertisement of their food on our
                    website with the number of people they can serve with the
                    price and location that they will be serving for.
                  </p>
                </div>
                <div
                  class="rating-meta d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".65s"
                >
                  <h5>Rating 4.8</h5>
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                </div>
                <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
                  <div class="single-counter">
                    <h3 id="secondo1" class="countup">
                      1M
                    </h3>
                    <h5>Download</h5>
                  </div>
                  <div class="single-counter position-relative">
                    <h3 id="secondo2" class="countup">
                      234k{" "}
                    </h3>
                    <h5>Happy User</h5>
                  </div>
                  <div class="single-counter">
                    <h3 id="secondo3" class="countup">
                      34k{" "}
                    </h3>
                    <h5>Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;
