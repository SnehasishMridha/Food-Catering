//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

//FoodDetails
const FoodDetails = () => {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div class="container">
            <h1>Noodles ---- Homemaker Name</h1>
            <h2>Pincode- 208001</h2>
  
            <span class="border border-secondary">
              <div class="container">
                <h1>Food Description</h1>
                <p>
                  Category- Veg/Non-Veg <br /> Quantity- 500gm <br /> Servings- 4
                </p>
              </div>
            </span>
            <col-2>
              <button type="button" class="btn btn-warning">
                Add To Cart
              </button>
            </col-2>
            <col-4>
              <button type="button" class="btn btn-success">
                Place Order Now
              </button>
            </col-4>
  
            {/*Images Tiles*/}
            <div class="container align-items-right">
              <img
                src="assets\img\post\noodles.jpg"
                className="card-img-top rounded"
                alt="noodles"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FoodDetails;
