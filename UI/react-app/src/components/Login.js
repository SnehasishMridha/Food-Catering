//import logo from "./logo.svg";
//import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

// Login Form
const Login = () => 
{
  let [email,setEmail] = useState("")
  let [pwd,setPwd] = useState("")
  let [actor,setActor] = useState("")

  function loginHandler()
  {
    console.log('clicked')
    if(actor=="aaa")
    {
      axios.post('http://localhost:8080/signin/loginHome/'+email+'/'+pwd,{})
      .then(response =>{
            console.log(response.data)
           if(response.data ===null )
           {
            alert("failed");
            navigate("/sign_in");
           }
           else
           {
            alert("success");
            sessionStorage.setItem("email",email);
            let hid=response.data.id;
            console.log("home id : ",hid);
            sessionStorage.setItem("id",hid);
             window.location="/Posting";
            //navigate("/Posting")
           
           }
    
          }).catch(error => {  console.log(error); alert("Wrong password") });
        }      
        else if(actor=="ccc")
        {
          axios.post('http://localhost:8080/signin/logincon/'+email+'/'+pwd,{})
            .then((response) =>{
              console.log("customer",response.data)
             if(response.data === null)
             {
                alert("failed");
                navigate("/sign-in");                       
             }
             else
             {
              console.log("valid");
              alert("success");
              sessionStorage.setItem("email",email);
              let cid=response.data.id;
              console.log("home id : ",cid);
              sessionStorage.setItem("id",cid);
              // navigate("/Foodlist")
              window.location="/Foodlist";     
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

export default Login;
