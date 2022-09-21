import logo from "./logo.svg";
import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import CNavBar from "./components/CNavBar";
import HMNavBar from "./components/HMNavBar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HMProfile from "./components/HMProfile";
import CProfile from "./components/CProfile";
import SearchBox from "./components/SearchBox";
import FoodList from "./components/FoodList";
import OrderHistory from "./components/OrderHistory";
import OrderSummary from "./components/OrderSummary";
import OrderPlaced from "./components/OrderPlaced";
import FoodDetails from "./components/FoodDetails";
import Cart from "./components/Cart";
import Review from "./components/Review";
import Posting from "./components/Posting";
import PostSuccess from "./components/PostSuccess";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
     {/*  <CNavBar /> 
      <HMNavBar/>*/}
      {/*Cart */}
      {/*<OrderPlaced />*/}
    
      {/*<Home />*/}
      {/*<CProfile/>*/}
      {/*<HMProfile/>*/}
      {/*<SearchBox/>*/}
      {/*<FoodList/>*/}
      {/*
      <FoodDetails />*/}
      {/* <OrderSummary /> */}
      {/*<OrderPlaced />*/}
      {/*<OrderHistory/>*/}

     
      {/*<Posting />
      <PostSuccess />
    <PostPage />*/}

     <Routes>           
               <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/Posting" element={<Posting />} />
                <Route path="/PostSuccess" element={<PostSuccess />} />
                <Route path="/PostPage" element={<PostPage />} />
                
                <Route path="/CProfile" element={<CProfile />} />
                <Route path="/Search" element={<FoodList />} />
                <Route path="/OrderHistory" element={<OrderHistory />} />
                <Route path="/Cart" element={<Cart />} />   
                <Route path="/Foodlist" element={<FoodList />} />  
                <Route path="/HMProfile" element={<HMProfile />} />
                <Route path="/FoodDetails" element={<FoodDetails />} />
                <Route path="/OrderPlaced" element={<OrderPlaced />} />           
            
                <Route path="/Logout" element={<Logout />} /> 
        </Routes>
      <Footer />
      <Scroll />
    </div>
  );
};

const Auth = () => {
  return <Header2 />;
};








//Post Page
function PostPage() {
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
                  See Your Post here{" "}
                </h1>
                <div className="d-grid">
                  <li class="nav-item">
                    <Link
                      className="nav-link"
                      to={"/Posting"}
                      class="main-btn btn-hover wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      Edit Post
                    </Link>{" "}
                    <a
                      class="main-btn btn-hover wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      Delete Post
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







//Consumer OrderSummary


//OrderPlaced


//FoodDetails


//Cart Page


export default App;
