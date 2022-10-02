//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

//review and rating
const Review = () => {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Rate food</h3>
          <div className="mb-3">
            <label for="order" title="order">
              Order-Description
            </label>
            <input type="text" className="form-control" name="review" />
          </div>
  
          <div className="mb-3">
            <label for="review" title="review">
              Review
            </label>
            <input
              type="text"
              className="form-control"
              name="review"
              placeholder="write here"
              maxLength={255}
            />
          </div>
  
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
          <br />
          <br />
          <div className="d-grid">
            <li class="nav-item">
              <a class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">
                Submit
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }

export default Review;
