//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

const CNavBar = () =>
{
  const f2=()=>{
    sessionStorage.removeItem("email");
    window.location="/home"
  }
    return(

<div className="App">
    <section class="header">
        <div class="navbar-area-2">
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg">
        <div class="row align-items-center" id="navbarSupportedContent">
        <ul id="nav" class="navbar-nav ml-auto">
        {/*<li class="nav-item">
        <a class="page-scroll" href="/CProfile">Profile</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="Search">Search</a>
    </li>*/}
        <li class="nav-item">
        <a class="page-scroll" href="/OrderHistory">OrderHistory</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="/Cart">Cart</a>
        </li>
        <li class="nav-item">
        {/* <a class="page-scroll" href="/sign-in">Logout</a> */}
        <a class="page-scroll"  onClick={()=>{f2()}}>Logout</a>
        </li>
        <li class="nav-item">
        </li>
        </ul>
        </div>
        </nav>
        </div>
        </div>
        </div>
        </div>
    </section>
</div>
    );
}

export default CNavBar;
