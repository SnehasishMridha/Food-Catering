//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

const SearchBox = () => {
    return (
      <>
        <div class="container">
          <div className="row">
            <div className="col-lg-12 card-margin">
              <div className="card search-form">
                <div className="card-body p-0">
                  <form id="search-form">
                    <div className="row">
                      <div className="col-12">
                        <div className="row no-gutters">
                          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>Mumbai</option>
                              <option>Pune</option>
                              <option>Karad</option>
                              <option>Jalgaon</option>
                              <option>Nasik</option>
                              <option>Ahmedabad</option>
                              <option>Satara</option>
                              <option>Delhi</option>
                              <option>Kolkata</option>
                              <option>Hyderabad</option>
                              <option>Chennai</option>
                              <option>Panjim</option>
                              <option>Bangalore</option>
                              <option>Thiruvananthapuram</option>
                              <option>Bhopal</option>
                              <option>Bhubaneswar</option>
                              <option>Noida</option>
                              <option>Chandigarh</option>
                              <option>Jaipur</option>
                              <option>Lucknow</option>
                            </select>
                          </div>
                          <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                            <input
                              type="text"
                              placeholder="Search..."
                              className="form-control"
                              id="search"
                              name="search"
                            />
                          </div>
                          <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                            <button type="submit" className="main-btn-2 ">
                              {/*btn btn-base btn btn-primary*/}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-search"
                              >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                  x1="21"
                                  y1="21"
                                  x2="16.65"
                                  y2="16.65"
                                ></line>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default SearchBox;
