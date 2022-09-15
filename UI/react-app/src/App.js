import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'



function App() {
  return (
    <div >
       <Header/>
         {/*<CProfile/>
        <HMProfile/>*/}
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
        <Footer/>
        <Scroll/>
    </div>
  );
}

// Header Home
function Header()
{
    return(
        <div className="App">
            <header class="header">
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
                    <Link className="nav-link" to={'/home'}>{/*home*/}
                    Home
                    </Link>
                </li>
                <li class="nav-item">
                <a class="page-scroll" href="#services">Services</a>
                </li>
                <li class="nav-item">
                <a class="page-scroll" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="page-scroll" href="#how">How It Works</a>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to={'/sign-in'}>
                    Login
                    </Link>
                </li>
                <li class="nav-item">
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
            </header>
        </div>
    );
}





// Footer
function Footer()
{
    return(
        <footer id="footer" class="footer pt-100 pb-70">
            <div class="footer-shape">
                <img src="assets/img/footer/footer-left.svg" alt="" class="shape shape-1" />
                <img src="assets/img/footer/footer-right.svg" alt="" class="shape shape-2" />
            </div>
            <div class="container">
            <div class="row">
            <div class="col-lg-3 col-md-6">
            <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div class="logo">
                <a href="#home"><img src="assets/img/logo/logo-2.jpg" alt="logo" /></a>
                </div>
            <div class="download-btns">
                <a href="https://www.apple.com/in/app-store/">
                    <span class="icon"><i class="lni lni-apple"></i></span>
                    <span class="text">Download on the <b>App Store</b> </span>
                </a>
                <a href="https://play.google.com/store/apps">
                    <span class="icon"><i class="lni lni-play-store"></i></span>
                    <span class="text">GET IT ON <b>Play Store</b> </span>
                </a>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
                    <h3>About Us</h3>
                    <ul class="links">
                        <li>
                            <Link to={'/home'}>{/*home*/}
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
            <a href="https://www.w3.org/Provider/Style/dummy.html">Help &#38; Support</a>
            </li>
            <li>
            <a href="https://www.w3.org/Provider/Style/dummy.html">Partner with us</a>
            </li>
            <li>
            <a href="https://www.w3.org/Provider/Style/dummy.html">Ride with us</a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
        </footer>
    );
}

// Home page
function Home()
{
    return(
      <div>
        <section id="home" class="hero-section">
            <div class="hero-shape">
                <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
            </div>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="hero-content">
                    <h1 class="wow fadeInUp" data-wow-delay=".2s">Delicious Home-made Food <span>At Your Doorstep</span> </h1>
                    <p class="wow fadeInUp" data-wow-delay=".4s">
                    Register with us and have the yummiest homemade food at your door now.
                    </p>
                    <a href="https://play.google.com/store/apps" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Download App</a>
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
        <Services/>
        <About/>
        <How/>
      </div>
    );
}

// Services
function Services()
{
    return(
        <section id="services" class="service-section pt-150">
            <div class="container">
            <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title text-center mb-70">
                    <span class="wow fadeInUp" data-wow-delay=".2s">Delivery Services</span>
                    <h1 class="wow fadeInUp" data-wow-delay=".4s">All Essentials You Need</h1>
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
                    <li class="nav-item">
                <Link className="nav-link" to={'/Posting'} class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Home-Maker</Link>
                </li>
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
                    <p>Do you love chicken eggs? We serve delicious egg dishes as well.</p>
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
                  <p>Welcome also serve non veg dishes like mutton, chicken and seafood as per your need.</p>
                </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    );
}

// About us
function About()
{
    return(
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
                <span class="wow fadeInUp" data-wow-delay=".2s">About Us</span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">On-time Delivery and Customer Satisfaction</h1>
                <p class="wow fadeInUp" data-wow-delay=".6s">Our website allows you to select from various Home-made foods that have been posted by the Home-makers. The Home-makers get the liberty to post an advertisement of their food on our website with the number of people they can serve with the price and location that they will be serving for.</p>
            </div>
            <div class="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
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
                <h3 id="secondo1" class="countup" >1M</h3>
                <h5>Download</h5>
            </div>
            <div class="single-counter position-relative">
                <h3 id="secondo2" class="countup">234k </h3>
                <h5>Happy User</h5>
            </div>
            <div class="single-counter">
                <h3 id="secondo3" class="countup" >34k </h3>
                <h5>Reviews</h5>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    );
}

// How It Works
function How()
{
    return(
        <section id="how" class="delivery-section pt-150">
            <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-5">
                <div class="delivery-content">
                    <div class="section-title">
                        <span class="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
                        <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 30 mins</h1>
                        <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">We have tie-up with reputed delivery partner with outstanding delivery history.</p>
                        <a href="https://play.google.com/store/apps" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".8s">Download App</a>
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
}



// Login Form
function Login() 
{
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>Email username or address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter username or email"
                required
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                />
            </div>
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
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
            <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
            </p>
        </form>
      </div>
      </div>
  )
}


// Sign up
function SignUp() 
{
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Sign Up</h3>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="flexRadioDefault1">
                 Home maker
                </label>
            </div>
            <div>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label for="flexRadioDefault2">
                 Consumer
                </label>
            </div><br/>
            <div className="mb-3">
                <label>First name *</label>
                <input type="text" className="form-control" placeholder="First name" required />
            </div>
            <div className="mb-3">
                <label>Last name *</label>
                <input type="text" className="form-control" placeholder="Last name" required />
            </div>
            <div className="mb-3">
                <label>Mobile number (10 digits only) *</label>
                <input type="number" className="form-control" placeholder="+91-**********" min="7000000000" max="9999999999" required />
            </div>
            <div className="mb-3">
                <label>Username *</label>
                <input type="text" className="form-control" placeholder="Enter username" required />
            </div>
            <div className="mb-3">
                <label>Email ID *</label>
                <input type="email" className="form-control" placeholder="Enter email id" required />
            </div>
            <div className="mb-3">
                <label>Password *</label>
                <input type="password" className="form-control" placeholder="Enter password" required />
            </div>
            <div className="mb-3">
                <label>Address</label>
                <input type="text" className="form-control" placeholder="Enter complete address" />
            </div>
            <div className="mb-3">
                <label>PIN code</label>
                <input type="number" className="form-control" placeholder="Enter PIN code" min="100000" max="9999999" />
            </div>
            <div className="mb-3"><small>Fields marked with * are mandatory</small></div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
      </div>
      </div>
  );
}


// Home-maker User Profile
function HMProfile() 
{
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Home-maker User Profile</h3>
            <div className="mb-3 d-grid">
                <button type="submit" className="form-control btn btn-primary">
                Create Consumer Profile / Import data from Consumer Profile
                </button>
            </div>
            <div className="mb-3">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="first name from database" required />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name from database" required />
            </div>
            <div className="mb-3">
                <label>Mobile number (10 digits only)</label>
                <input type="number" className="form-control" placeholder="+91-********** from database" min="7000000000" max="9999999999" required />
            </div>
            <div className="mb-3">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="username from database" required />
            </div>
            <div className="mb-3">
                <label>Email ID</label>
                <input type="email" className="form-control" placeholder="email id from database" required />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password from database" required />
            </div>
            <div className="mb-3">
                <label>Address </label>
                <small> (max. 255 chars)</small>
                <textarea class="form-control" id="exampleFormControlTextarea" rows="3" required></textarea>
            </div>
            <div className="mb-3">
                <label>PIN code</label>
                <input type="number" className="form-control" placeholder="PIN code from database" min="100000" max="9999999" />
            </div>
            <div class="mb-3">
                <label for="formFile" className="form-label">Upload your photo</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                Save &#38; Update
                </button>
            </div>
        </form>
      </div>
      </div>
  );
}


// Consumer User Profile
function CProfile() 
{
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Consumer User Profile</h3>
            <div className="mb-3 d-grid">
                <button type="submit" className="form-control btn btn-primary">
                Create Home-maker Profile  / Import data from Home-maker Profile
                </button>
            </div>
            <div className="mb-3">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="first name from database" required />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name from database" required />
            </div>
            <div className="mb-3">
                <label>Mobile number (10 digits only)</label>
                <input type="number" className="form-control" placeholder="+91-********** from database" min="7000000000" max="9999999999" required />
            </div>
            <div className="mb-3">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="username from database" required />
            </div>
            <div className="mb-3">
                <label>Email ID</label>
                <input type="email" className="form-control" placeholder="email id from database" required />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password from database" required />
            </div>
            <div className="mb-3">
                <label>Address </label>
                <small> (max. 255 chars)</small>
                <textarea class="form-control" id="exampleFormControlTextarea" rows="3" required></textarea>
            </div>
            <div className="mb-3">
                <label>PIN code</label>
                <input type="number" className="form-control" placeholder="PIN code from database" min="100000" max="9999999" />
            </div>
            <div class="mb-3">
                <label for="formFile" className="form-label">Upload your photo</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                Save &#38; Update
                </button>
            </div>
        </form>
      </div>
      </div>
  );
}

//Homemaker posting
function Posting()
{
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
              <h3>Make your Post here</h3>
              <h4>Please Upload Images</h4>
              <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02"/>
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                </div>
           
              <div className="mb-3">
                  <label>Name of the Food:</label>
                  <input type="text" className="form-control" placeholder="Food name" />
              </div>
              <div className="mb-3">
                  <label>Description of Food:</label>
                  <input type="text" className="form-control" placeholder="Description" />
              </div>
              <div className="mb-3">
                  <label>Category of Food</label>
                  
                  <div>
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label for="flexRadioDefault1">
                  Vegetarian
                  </label>
              </div>
              <div>
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label for="flexRadioDefault2">
                   Non-Vegetarian
                  </label>
              </div>
              </div>
              <div className="mb-3">
                  <label>Food Price</label>
                  <input type="email" className="form-control" placeholder="Enter in Rupees" />
              </div>
              <div className="mb-3">
                  <label>Unit of Serves:</label>
                  <input type="password" className="form-control" placeholder="Enter in Numbers" />
              </div>
              <div className="mb-3">
                  <label>Quantity of One Serve:</label>
                  <input type="text" className="form-control" placeholder="In Grams" />
              </div>
             
              <div className="d-grid">
              <li class="nav-item">
                <Link className="nav-link" to={'/PostSuccess'} class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Submit</Link>
                </li>
              </div>
          </form>
        </div>
        </div>

);

}




//Post success
function PostSuccess()
{
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
         
        <h3>Posted Successfully</h3>
        <div className="d-grid">
              <li class="nav-item">
                <Link className="nav-link" to={'/PostPage'} class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Take Me to My Post</Link>
                </li>
              </div>
        </div>
        </div>

);

}

//Post Page
function PostPage()
{
    return(
        <div>
          <section id="home" class="hero-section">
              <div class="hero-shape">
                  <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
              </div>
              <div class="container">
              <div class="row align-items-center">
              <div class="col-lg-6">
                  <div class="hero-content">
                      <h1 class="wow fadeInUp" data-wow-delay=".2s">See Your Post here </h1>
                      <div className="d-grid">
              <li class="nav-item">
                <Link className="nav-link" to={'/Posting'} class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Edit Post</Link> <a  class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Delete Post</a>
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

function Scroll()
{
    return(
      <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
      </a>
    );
}


export default App;
