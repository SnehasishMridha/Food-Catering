//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

// Header Home
const Header = () =>
{
    return(
        <div className="App">
            <section class="header">
                <div class="navbar-area">
                <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">{/*Home*/}
                <img src="assets/img/logo/logo.jpg" alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                </button>
                {/*Navigation Bar*/}
                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                <li class="nav-item">
                <a class="page-scroll" href="home">Home</a>
                   {/* <Link className="nav-link page-scroll" to={'/#'}>{/*home
                    Home
                    </Link>*/}
                </li>

                <li class="nav-item">
                {/*<a class="page-scroll" href="#about">Login</a>*/}
                    <Link className="nav-link" to={'/sign-in'}>
                    Login
                    </Link>
                </li>
                <li class="nav-item">
                {/*<a class="page-scroll" href="#about">Sign up</a>*/}
                    <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                    </Link>
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

export default Header;
