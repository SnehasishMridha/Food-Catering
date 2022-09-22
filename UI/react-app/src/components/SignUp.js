//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'

// Sign up
const SignUp = () => {

  let [first,setFirst]=useState("");
  let [last,setLast]=useState("");
  let [username,setUsername]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword] = useState("")
  let [actor,setActor] = useState("")
  let [address,setAddress] = useState("")
  let [pincode,setPincode]=useState("")
  let[mobile,setMobile]=useState("")
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
        mobile:mobile,
        pincode:pincode,
        address:address
    }).then((response) => {
        console.log(response.data);
       // alert("Registration Successful");
        window.location="/sign-in"
    }).catch((e) => {
        console.log(e);
        //alert("registration failed")
        window.location="/sign-up"
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
        mobile:mobile,
        pincode:pincode,
        address:address
    }).then((response) => {
  
        console.log(response.data);
        alert("Registration Successful");
        window.location="/sign-in";
    }).catch((e) => {
        console.log(e);
       alert("registration failed")
        window.location="/sign-up"
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
           <div className="mb-3">
              <label>Mobile number (10 digits only) </label>
              <input
                type="number"
                className="form-control"
                placeholder="+91-**********"
                min="7000000000"
                max="9999999999" onChange={(e)=>{setMobile(e.target.value)}}
                required  
              />
    </div>
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
                placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} required
              />
            </div>
            <div className="mb-3">
              <label>Address *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter complete address"  onChange={(e)=>{setAddress(e.target.value)}}
              required
              />
             </div>
            <div className="mb-3">
              <label>PIN code *</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter PIN code"
                min="100000" 
                max="9999999"  onChange={(e)=>{setPincode(e.target.value)}} required
              />
  </div>
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
{/*const HMProfile = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Home-maker User Profile</h3>
          <div className="mb-3 d-grid">
            <button type="submit" className="main-btn-2 form-control ">
              {/btn btn-primary/}
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
            </div><br/>
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
              placeholder="+91-**** from database"
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
            {/<input type="text" className="form-control" placeholder="Enter complete address" />/}
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
          {/<div className="mb-3"><small>Fields marked with * are mandatory</small></div>/}
          <div className="d-grid">
            <button type="submit" className="main-btn-2">
              {/btn btn-primary/}
              Save &#38; Update
            </button>
          </div>
          {/*<p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>
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
              {/btn btn-primary/}
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
            </div><br/>
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
              placeholder="+91-**** from database"
              min="7000000000"
              max="9999999999"  maxlength="10"
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
            {/<input type="text" className="form-control" placeholder="Enter complete address" />/}
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
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required maxlength="6"

            />
          </div>
          <div class="mb-3">
            <label for="formFile" className="form-label">
              Upload your photo
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          {/<div className="mb-3"><small>Fields marked with * are mandatory</small></div>/}
          <div className="d-grid">
            <button type="submit" className="main-btn-2 ">
              {/btn btn-primary/}
              Save &#38; Update
            </button>
          </div>
          {/*<p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>
        </form>
      </div>
    </div>
  );
};

{
  /review and rating/
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
}*/}

export default SignUp;
