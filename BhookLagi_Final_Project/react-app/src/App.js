import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import CNavBar from "./components/CNavBar";
import HMNavBar from "./components/HMNavBar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Home from "./components/Home";
import FoodListArray from "./FoodListArray";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
import PostPage from "./components/PostPage";
import Logout from "./Logout"
import Forgot from "./components/Forgot"
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
     
     <Routes>           
               <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/Forgot" element={<Forgot />} />
                <Route path="/Posting" element={<Posting />} />
                <Route path="/PostSuccess" element={<PostSuccess />} />
                <Route path="/PostPage" element={<PostPage />} />             
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Search" element={<FoodList />} />
                <Route path="/OrderHistory" element={<OrderHistory />} />
                <Route path="/Cart" element={<Cart />} />   
                <Route path="/Foodlist" element={<FoodList />} />  
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

export default App;
