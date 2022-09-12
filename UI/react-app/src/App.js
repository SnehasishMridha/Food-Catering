import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="preloader">
      <div class="loader">
      <div class="ytp-spinner">
      <div class="ytp-spinner-container">
      <div class="ytp-spinner-rotator">
      <div class="ytp-spinner-left">
      <div class="ytp-spinner-circle"></div>
      </div>
      <div class="ytp-spinner-right">
      <div class="ytp-spinner-circle"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>


      <header class="header">
      <div class="navbar-area">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
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
      <a class="page-scroll" href="#home">Home</a>
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
      <a class="page-scroll" href="#about">Login</a>
      </li>

      <li class="nav-item">
      <a class="page-scroll" href="#about">Register</a>
      </li>


      </ul>
      </div>

      </nav>

      </div>
      </div>

      </div>

      </div>

      </header>

      {/*home*/}
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

      {/*services*/}
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
      <img src="assets/img/service/service-icon-1.svg" alt="" />
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
      <p>We also serve non veg dishes like mutton, chicken and seafood as per your need.</p>
      </div>
      </div>
      </div>


      </div>
      </div>
      </section>

      {/*about*/}
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

      {/*how*/}
      <section id="how" class="delivery-section pt-150">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-5">
      <div class="delivery-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
      <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 30mins</h1>
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



      {/*footer*/}
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
      <a href="#home">Home</a>
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
      <a href="javascript:void(0)">Help & Support</a>{/*swiggy*/}
      </li>
      <li>
      <a href="javascript:void(0)">Partner with us</a>{/*swiggy*/}
      </li>
      <li>
      <a href="javascript:void(0)">Ride with us</a>{/*swiggy*/}
      </li>

      </ul>
      </div>
      </div>


      </div>
      </div>
      </footer>

      {/*Scroll To Top*/}
      <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
      </a>

    </div>
  );
}

export default App;
