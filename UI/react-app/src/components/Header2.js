//import logo from "./logo.svg";
import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// Header Login
const Header2 = () =>
{
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
        <li class="nav-item">
        <a class="page-scroll" href="#services">Services</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#about">About Us</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#how">How It Works</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#received">Delivery</a>
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

export default Header2;
