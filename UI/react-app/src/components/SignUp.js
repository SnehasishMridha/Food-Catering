//import logo from "./logo.svg";
//import "./App.css";
//import { useEffect,useState } from "react";
//import axios from "axios";
import { Link, } from 'react-router-dom'

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

export default SignUp;
