//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, } from 'react-router-dom'

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
  let navigate=useNavigate()
  function regHandler()
    {
      console.log("hi")
      if(actor==="ccc")
      {
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
        alert("Registration Successful");
       navigate("/sign-in")
    }).catch((e) => {
        console.log(e);
        alert("registration failed")
    })
  } 
    else if(actor==="hhh")
      {
        console.log("homemaker")
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
        navigate("/sign-in")
    }).catch((e) => {
        console.log(e);
       alert("registration failed")
    })
  } }
  const validateMobile = (e) =>
  {
    setMobile(e.target.value.replace(/\D/g, ''))
    /*setMobile(e.target.value)*/
  }

  const validatePIN = (e) =>
  {
    setPincode(e.target.value.replace(/\D/g, ''))
    /*setPincode(e.target.value)*/
  }

  const [message, setMessage] = useState('');
  // The regular exprssion to validate the email pattern
  const emailRegex = /\S+@\S+\.\S+/;
  const validateEmail = (e) =>
  {
    if (emailRegex.test(e.target.value)) 
    {
      setEmail(e.target.value)
      setMessage('Your email looks good!');
    } 
    else 
    {
      setMessage('Please enter a valid email!');
    }
  }

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>
            <div>
            <input type="radio" id="radio" name="r1"  value="aaa" onClick={(e)=>{setActor("hhh")}}/>
            <label htmlFor="radio"> Homemaker</label>  
            <input type="radio" id="radio1" name="r1"  value="ccc" onClick={(e)=>{setActor("ccc")}}/>
           <label htmlFor="radio1">Customer </label><br/>
           
           </div>
            <br />
            <div className="mb-3">
              <label>First name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name" onBlur={(e)=>{setFirst(e.target.value)}}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name" onBlur={(e)=>{setLast(e.target.value)}}
                required
              />
            </div>
            <div className="mb-3">
              <label>Mobile number (10 digits only) </label>
              <input
                type="text"
                className="form-control"
                placeholder="+91-**********"
                /*min="7000000000"
                max="9999999999"*/ onChange={validateMobile}
                maxlength="10" 
                value={mobile}
                required  
              />
            </div>

            <div className="mb-3">
              <label>Username *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username" onBlur={(e)=>{setUsername(e.target.value)}}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email ID *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email id" onChange={validateEmail}
                /*value={email}*/
                required
              />
                      {message}
            </div>

            <div className="mb-3">
              <label>Password *</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password" onBlur={(e)=>{setPassword(e.target.value)}} required
              />
            </div>
            <div className="mb-3">
              <label>Address *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter complete address"  onBlur={(e)=>{setAddress(e.target.value)}}
              required
              />
             </div>
           <div className="mb-3">
              <label>PIN code *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter PIN code"
                /*min="100000" 
                max="9999999"*/  onChange={validatePIN} required
                maxlength="6"
                value={pincode}
              />
            </div>

            <div className="mb-3">
              <small>Fields marked with * are mandatory</small>
            </div>
            <div className="d-grid">
              <button type="button" className="main-btn-2" onClick={regHandler}>
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