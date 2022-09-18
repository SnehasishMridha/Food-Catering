import logo from "./logo.svg";
import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,useNavigate
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      {/*Cart */}
      {/*<OrderPlaced />*/}
    
      {/*<Home />*/}
      {/*<CProfile/>*/}
      {/*<HMProfile/>*/}
      {/*<SearchBox/>*/}
      {/*<FoodList/>*/}
      {/*
      <FoodDetails />
      <OrderSummary />
      <OrderPlaced />*/}
      {/*<OrderHistory/>*/}

     
      {/*<Posting />
      <PostSuccess />
    <PostPage />*/}

      <Routes>
            {/*<Switch>*/}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/Posting" element={<Posting />} />
                <Route path="/PostSuccess" element={<PostSuccess />} />
                <Route path="/PostPage" element={<PostPage />} />
            {/*</Switch>*/}
        </Routes>
      <Footer />
      <Scroll />
    </div>
  );
};

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
                {/*<li class="nav-item">
                <a class="page-scroll" href="#services">Services</a>
                </li>
                <li class="nav-item">
                <a class="page-scroll" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="page-scroll" href="#how">How It Works</a>
                </li>*/}
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



// Footer
const Footer = () => {
  return (
    <footer id="footer" class="footer pt-100 pb-70">
      <div class="footer-shape">
        <img
          src="assets/img/footer/footer-left.svg"
          alt=""
          class="shape shape-1"
        />
        <img
          src="assets/img/footer/footer-right.svg"
          alt=""
          class="shape shape-2"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
              <div class="logo">
                <a href="#home">
                  <img src="assets/img/logo/logo-2.jpg" alt="logo" />
                </a>
              </div>
              <div class="download-btns">
                <a href="https://www.apple.com/in/app-store/">
                  <span class="icon">
                    <i class="lni lni-apple"></i>
                  </span>
                  <span class="text">
                    Download on the <b>App Store</b>{" "}
                  </span>
                </a>
                <a href="https://play.google.com/store/apps">
                  <span class="icon">
                    <i class="lni lni-play-store"></i>
                  </span>
                  <span class="text">
                    GET IT ON <b>Play Store</b>{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
              <h3>About Us</h3>
              <ul class="links">
                <li>
                  {/*<a href="#home">Home</a>*/}
                  <Link to={"/home"}>
                    {/*home*/}
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
              <h3>Contact Us</h3>
              <ul class="links">
                <li>
                  <a href="https://www.w3.org/Provider/Style/dummy.html">
                    Help &#38; Support
                  </a>
                </li>
                <li>
                  <a href="https://www.w3.org/Provider/Style/dummy.html">
                    Partner with us
                  </a>
                </li>
                <li>
                  <a href="https://www.w3.org/Provider/Style/dummy.html">
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Scroll = () => {
  return (
    <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
    </a>
  );
};

// Home page
const Home = () => {
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
                  Delicious Home-made Food <span>At Your Doorstep</span>{" "}
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Register with us and have the yummiest homemade food at your
                  door now.
                </p>
                <a
                  href="https://play.google.com/store/apps"
                  class="main-btn btn-hover wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Download App
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/hero/hero-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <How />
      <Received/>
    </div>
  );
};

// Services
const Services = () => {
  return (
    <section id="services" class="service-section pt-150">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="section-title text-center mb-70">
              <span class="wow fadeInUp" data-wow-delay=".2s">
                Delivery Services
              </span>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">
                All Essentials You Need
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".2s">
              <div class="icon">
                <img src="assets/img/service/service-icon-2.svg" alt="" />
              </div>
              <div class="content">
                <h3>Pure Vegetarian</h3>
                <p>We serve pure veg dishes as per your need.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".2s">
              <div class="icon">
                <img src="assets/img/service/service-icon-1.svg" alt="" />
              </div>
              <div class="content">
                <h3>Eggitarian</h3>
                <p>
                  Do you love chicken eggs? We serve delicious egg dishes as
                  well.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay=".2s">
              <div class="icon">
                <img src="assets/img/service/service-icon-1.svg" alt="" />
              </div>
              <div class="content">
                <h3>Non-Vegeterian</h3>
                <p>
                  Welcome also serve non veg dishes like mutton, chicken and
                  seafood as per your need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

// How It Works
const How = () => {
  return (
    <section id="how" class="delivery-section pt-150">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="delivery-content">
              <div class="section-title">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Fast Delivery
                </span>
                <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">
                  Order Now, Recieve Within 30 mins
                </h1>
                <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">
                  We have tie-up with reputed delivery partner with outstanding
                  delivery history.
                </p>
                <a
                  href="https://play.google.com/store/apps"
                  class="main-btn btn-hover wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7 order-first order-lg-last">
            <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/img/delivery/delivery-img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Contactless Delivery
const Received = () =>
{
    return(
      <section id="received" class="about-section received-section pt-150">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img received-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/received/received-img.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
            <div class="about-content received-content">
            <div class="section-title">
              <span class="wow fadeInUp" data-wow-delay=".2s">Contactless Delivery</span>
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".4s">On-time Delivery to Your Doorstep</h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">No need to worry during pandemic like situations. Our delivery partner will take all the safety precautions. </p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
}


const Auth = () => {
  return <Header2 />;
};

// Login Form
// Login Form
const Login = () => 
{
  let [email,setEmail] = useState("")
  let [pwd,setPwd] = useState("")
  let [actor,setActor] = useState("")
  let navigate = useNavigate()
  function loginHandler()
  {
    console.log('clicked')
    if(actor=="aaa")
    {
         axios.post('http://localhost:8080/signin/loginHome/'+email+'/'+pwd,{})
      .then(data =>{
            console.log(data.data)
           if(data.data === "valid")
           {
            alert("success");
            sessionStorage["email"]=email;
              navigate("/Posting")
           }
           else if (data.data === "invalid")
           {
            alert("failed");
              navigate("/sign_in");
           }
    
          }).catch(error => {  console.log(error); alert("Wrong password") });
        }      
     else if(actor=="ccc")
      {
        axios.post('http://localhost:8080/signin/logincon/'+email+'/'+pwd,{})
          .then((data) =>{
            console.log("customer",data.data)
           if(data.data === "valid")
           {
            console.log("valid");
            alert("success");
            //sessionStorage["email"]=email;
              navigate("/Foodlist")
            //window.location="/Foodlist"
           }
           else if (data.data === "invalid")
           {
            alert("failed");
              navigate("/sign-in");
           }
          
          } ).catch(error => {console.log(error); alert("error occured") });
      }
    }
  
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Login</h3>
            <div className="mb-3">
                <label>Email username or address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter username or email"
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e)=>{setPwd(e.target.value)}}
                required
                />
            </div>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={(e)=>{setActor("aaa")}}/>
                <label for="flexRadioDefault1">
                 Home maker
                </label>
            </div>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={(e)=>{setActor("ccc")}}/*checked*//>
                <label for="flexRadioDefault2">
                 Consumer
                </label>
            </div><br/><br/>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                    </label>
                </div>
            </div>
            <div>
                <button type="submit" className="main-btn-2 " onClick={loginHandler}> {/*btn btn-primary*/}
                Login 
                </button>
            </div>
            <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            </p>
        </form>
      </div>
      </div>
  );
}

// Sign up
// Sign up
const SignUp = () => {

  let [first,setFirst]=useState("");
  let [last,setLast]=useState("");
  let [username,setUsername]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword] = useState("")
  let [actor,setActor] = useState("")
  function regHandler()
    {
      console.log("hi")
      if(actor=="ccc")
      {
        console.log(first)
        console.log("cons")
    axios.post("http://localhost:8080/consumer/addconsumer", {
        firstname: first,
        lastname: last,
        username: username,
        email: email,
        password: password,
    }).then((response) => {
        console.log(response.data);
        alert("Registration Successful");
    }).catch((e) => {
        console.log(e);
        alert("registration failed")
    })
  } 
    else if(actor=="hhh")
      {
    axios.post("http://localhost:8080/consumer/addhomemaker", {
        firstname: first,
        lastname: last,
        username: username,
        email: email,
        password: password,
    }).then((response) => {
  
        console.log(response.data);
        alert("Registration Successful");
    }).catch((e) => {
        console.log(e);
        alert("registration failed")
    })
  } }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>
            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={(e)=>{setActor("hhh")}}
              />
              <label for="flexRadioDefault1">Home maker</label>
            </div>
            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2" /*checked*/
                onClick={(e)=>{setActor("ccc")}}
              />
              <label for="flexRadioDefault2">Consumer</label>
            </div>
            <br />
            <div className="mb-3">
              <label>First name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name" onChange={(e)=>{setFirst(e.target.value)}}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name" onChange={(e)=>{setLast(e.target.value)}}
                required
              />
            </div>
            {/*<div className="mb-3">
              <label>Mobile number (10 digits only) </label>
              <input
                type="number"
                className="form-control"
                placeholder="+91-**********"
                min="7000000000"
                max="9999999999"
                required
              />
    </div>*/}
            <div className="mb-3">
              <label>Username *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email ID *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email id" onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password *</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            {/*<div className="mb-3">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter complete address"
              />
  </div>*/}
            {/*<div className="mb-3">
              <label>PIN code</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter PIN code"
                min="100000"
                max="9999999"
              />
  </div>*/}
            <div className="mb-3">
              <small>Fields marked with * are mandatory</small>
            </div>
            <div className="d-grid">
              <button type="submit" className="main-btn-2" onClick={regHandler}>
                {/*btn btn-primary*/}
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right" >
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  };
  

// Home-maker User Profile
const HMProfile = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Home-maker User Profile</h3>
          <div className="mb-3 d-grid">
            <button type="submit" className="main-btn-2 form-control ">
              {/*btn btn-primary*/}
              Create Consumer Profile / Import data from Consumer Profile
            </button>
          </div>
          {/*<div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="flexRadioDefault1">
                 Home maker
                </label>
            </div>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" /> {/*checked
                <label for="flexRadioDefault2">
                 Consumer
                </label>
            </div><br/>*/}
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Mobile number (10 digits only)</label>
            <input
              type="number"
              className="form-control"
              placeholder="+91-********** from database"
              min="7000000000"
              max="9999999999"
              required
            />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="email id from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Address </label>
            <small> (max. 255 chars)</small>
            {/*<input type="text" className="form-control" placeholder="Enter complete address" />*/}
            <textarea
              class="form-control"
              id="exampleFormControlTextarea"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label>PIN code</label>
            <input
              type="number"
              className="form-control"
              placeholder="PIN code from database"
              min="100000"
              max="9999999"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" className="form-label">
              Upload your photo
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          {/*<div className="mb-3"><small>Fields marked with * are mandatory</small></div>*/}
          <div className="d-grid">
            <button type="submit" className="main-btn-2">
              {/*btn btn-primary*/}
              Save &#38; Update
            </button>
          </div>
          {/*<p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>*/}
        </form>
      </div>
    </div>
  );
};

// Consumer User Profile
const CProfile = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Consumer User Profile</h3>
          <div className="mb-3 d-grid">
            <button type="submit" className="main-btn-2 form-control ">
              {/*btn btn-primary*/}
              Create Home-maker Profile / Import data from Home-maker Profile
            </button>
          </div>
          {/*<div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="flexRadioDefault1">
                 Home maker
                </label>
            </div>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" /> {/*checked
                <label for="flexRadioDefault2">
                 Consumer
                </label>
            </div><br/>*/}
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Mobile number (10 digits only)</label>
            <input
              type="number"
              className="form-control"
              placeholder="+91-********** from database"
              min="7000000000"
              max="9999999999"
              required
            />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="email id from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password from database"
              required
            />
          </div>
          <div className="mb-3">
            <label>Address </label>
            <small> (max. 255 chars)</small>
            {/*<input type="text" className="form-control" placeholder="Enter complete address" />*/}
            <textarea
              class="form-control"
              id="exampleFormControlTextarea"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label>PIN code</label>
            <input
              type="number"
              className="form-control"
              placeholder="PIN code from database"
              min="100000"
              max="9999999"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" className="form-label">
              Upload your photo
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          {/*<div className="mb-3"><small>Fields marked with * are mandatory</small></div>*/}
          <div className="d-grid">
            <button type="submit" className="main-btn-2 ">
              {/*btn btn-primary*/}
              Save &#38; Update
            </button>
          </div>
          {/*<p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>*/}
        </form>
      </div>
    </div>
  );
};

{
  /*review and rating*/
}
function Review() {
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

//Homemaker posting
function Posting() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Make your Post here</h3>
          <h4>Please Upload Images</h4>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>

          <div className="mb-3">
            <label>Name of the Food:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Food name"
            />
          </div>
          <div className="mb-3">
            <label>Description of Food:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="mb-3">
            <label>Category of Food</label>

            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label for="flexRadioDefault1">Vegetarian</label>
            </div>
            <div>
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label for="flexRadioDefault2">Non-Vegetarian</label>
            </div>
          </div>
          <br/><br/>
          <div className="mb-3">
            <label>Food Price</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter in Rupees"
            />
          </div>
          <div className="mb-3">
            <label>Unit of Serves:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter in Numbers"
            />
          </div>
          <div className="mb-3">
            <label>Quantity of One Serve:</label>
            <input
              type="text"
              className="form-control"
              placeholder="In Grams"
            />
          </div>
          <div className="mb-3">
            <label>Date of Service:</label>
            <input
              type="date"
              className="form-control"
              
            />
          </div>
          
          <div className="mb-3">
            <label>Time of Service:</label>
            <input
              type="time"
              className="form-control"
              
            />
          </div>

          <div className="d-grid">
            <li class="nav-item">
              <Link
                className="nav-link"
                to={"/PostSuccess"}
                class="main-btn btn-hover wow fadeInUp"
                data-wow-delay=".6s"
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

const FoodList = () => {
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <SearchBox />

          <div class="row container">
            <div class="row-2">
              <div class="column">
                <div class="card">
                  <img
                    src="assets\img\post\samosa.jpg"
                    className="card-img-top"
                    alt="samosa"
                  />
                  <h4 class="card-title">samosa</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\palak.jpg"
                    className="card-img-top"
                    alt="palak"
                  />
                  <h4 class="card-title">palak-paneer</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\biryani.jpg"
                    className="card-img-top"
                    alt="biryani"
                  />
                  <h4 class="card-title">biryani</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\noodles.jpg"
                    className="card-img-top"
                    alt="noodles"
                  />
                  <h4 class="card-title">noodles</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="row-2">
              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\roti-sabji.jpg"
                    className="card-img-top"
                    alt="roti-sabji"
                  />
                  <h4 class="card-title">roti-sabji</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\dosa.jpg"
                    className="card-img-top"
                    alt="dosa"
                  />
                  <h4 class="card-title">dosa</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\idli.jpg"
                    className="card-img-top"
                    alt="idli"
                  />
                  <h4 class="card-title">idli</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\pav-bhaji.jpg"
                    className="card-img-top"
                    alt="pav-bhaji"
                  />
                  <h4 class="card-title">pav-bhaji</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OrderHistory = () => {
  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h2> OrderHistory </h2>

          <div class="row container">
            <div class="row-2">
              <div class="column">
                <div class="card">
                  <img
                    src="assets\img\post\samosa.jpg"
                    className="card-img-top"
                    alt="samosa"
                  />
                  <h4 class="card-title">samosa</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\palak.jpg"
                    className="card-img-top"
                    alt="palak"
                  />
                  <h4 class="card-title">palak-paneer</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\biryani.jpg"
                    className="card-img-top"
                    alt="biryani"
                  />
                  <h4 class="card-title">biryani</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <img
                    src="assets\img\post\noodles.jpg"
                    className="card-img-top"
                    alt="noodles"
                  />
                  <h4 class="card-title">noodles</h4>
                  <p>Some text</p>
                  <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /*Consumer OrderSummary*/
}
const OrderSummary = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div class="row container align-items-center">
          <ul class="list-group  align-self-center">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Samosa --- 50 <img
                    src="assets\img\post\samosa.jpg"
                    className="card-img-top"
                    alt="samosa"
                  />
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Veg-Thali ---250
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Veg-Crisp-Burger ---350
              <span class="badge badge-primary badge-pill"> </span>
            </li>
          </ul>
        </div>
      </div>
      {/*Deliver Address Selection */}
      <div class="container">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <ul class="list-group">
              <li>Delivery Address</li>
              <li class="list-group-item d-flex justify-content-between align-items-left"></li>
            </ul>
          </div>
        </div>
      </div>

      {/*Consumer Place Order & Total*/}
      <div class="container">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h1>
              TOTAL:
              <h2>Payment: COD(Cash On Delivery)</h2>
            </h1>

            <button type="button" class="btn btn-success">
              PlaceOrder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//OrderPlaced
const OrderPlaced = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div class="container">
          <h1>OrderPlaced..!</h1>
          <h2>Order Details</h2>
        </div>
      </div>
    </div>
  );
};

{
  /*FoodDetails */
}
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


{/*Cart Page */}
const Cart = () => {
  return(
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2>CART</h2>
        <div class = "container border border-secondary">
          <pre>
            <h4>1. Samosa - </h4>
             <h4>Homemaker Name</h4>
            <h5>Quantity : 1 <br/> Price :&#x20b9;210</h5>
             
             <hr></hr>
             <h4>2. Noodle - </h4>
             <h4>Homemaker Name</h4>
            <h5>Quantity : 1 <br/> Price : &#x20b9;290</h5>

            <hr></hr>
            <h5>Total Price: &#x20b9;500</h5>

          </pre>
        </div>
        <div>
        <button type="button" class="btn btn-success">
              Place Order Now
            </button>
        </div>

      </div>
      </div>
  );
};

export default App;
