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




//Homemaker posting
const Posting=()=> {
  let [image,setImage] = useState("")
  let [name,setName] = useState("")
  let [description,setDescription] = useState("")
  let [category,setCategory] = useState("")
  let [price,setPrice] = useState("")
  let [unit,setUnit] = useState("")
  let [quantity,setQuantity] = useState("")
  let [date,setDate] = useState()
  let navigate = useNavigate()

  function postHandler()
  {
    console.log("entered in function")
    axios.post("http://localhost:8080/food/addfood", {
      image: image,
      name: name,
      data: description,
      category: category,
      price: price,
      unit: unit,
      qnt: quantity,
      date: date})
    //  time: time
          .then((data) =>{
           if(data.data === "added")
           {
            
            console.log("added");
            navigate("/PostSuccess")
           }
           else if (data.data === "failed to add")
           {
            alert("failed");
           }
          
          } ).catch(error => {console.log(error); alert("error occured")});
      }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Make your Post here</h3>
          <h4>Please Upload Images</h4>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" onChange={(e)=>{setImage(e.target.value)}}/>
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>

          <div className="mb-3">
            <label>Name of the Food:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Food name" onChange={(e)=>{setName(e.target.value)}}
              
            />
          </div>
          <div className="mb-3">
            <label>Description of Food:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label>Category of Food</label>

            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1" onClick={(e)=>{setCategory("Veg")}}
              />
              <label for="flexRadioDefault1">Vegetarian</label>
            </div>
            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2" onClick={(e)=>{setCategory("Non-veg")}}
              />
              <label for="flexRadioDefault2">Non-Vegetarian</label>
            </div>
          </div>
          <br/><br/>
          <div className="mb-3">
            <label>Food Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter in Rupees" onChange={(e)=>{setPrice(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label>Unit of Serves:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter in Numbers" onChange={(e)=>{setUnit(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label>Quantity of One Serve:</label>
            <input
              type="number"
              className="form-control"
              placeholder="In Grams" onChange={(e)=>{setQuantity(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label>Date of Service:</label>
            <input
              type="date"
              className="form-control" onChange={(e)=>{setDate(e.target.value)}}
              
            />
          </div>
          
        {/*  <div className="mb-3">
            <label>Time of Service:</label>
            <input
              type="time" step="2"
              className="form-control" onChange={(e)=>{setTime(e.target.value)}}
              
            />
  </div>*/}

          <div className="d-grid">
            <li class="nav-item">
              <Link
                className="nav-link"
                to={"/PostSuccess"}
                class="main-btn btn-hover wow fadeInUp"
                data-wow-delay=".6s" onClick={postHandler}
              >
                Submit 
              </Link>
            </li>
          </div>
        </form>
      </div>
    </div>
  );
}

//Post success
function PostSuccess() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Posted Successfully</h3>
        <div className="d-grid">
          <li class="nav-item">
            <Link
              className="nav-link"
              to={"/PostPage"}
              class="main-btn btn-hover wow fadeInUp"
              data-wow-delay=".6s"
            >
              Take Me to My Post
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

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
