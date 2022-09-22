//import logo from "./logo.svg";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

// Login Form
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
      .then((response) =>{
            console.log(response.data)
           if(response.data ===null )
           {
            alert("failed");
            //navigate("/sign-in");
            window.location="/sign-in";
           }
           else
           {
           
            sessionStorage.setItem("email",email);
            console.log(response.data);
            let hid=response.data.id;        
            console.log("home id :",hid);
            sessionStorage.setItem("id",hid);
            alert("success");
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
                //navigate("/sign-in"); 
                window.location="/sign-in";                      
             }
             else
             {
              console.log("valid");
              alert("success");
              sessionStorage.setItem("email",email);
              let cid=response.data.id;
              console.log("home id : ",cid);
              sessionStorage.setItem("id",cid);
              //navigate("/FoodList")
              window.location="/FoodList";     
             }
            
          
          } ).catch(error => {console.log(error); alert("error occured") });
      }
    }
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Login</h3>
            <div>
                <input type="radio" name="a" id="a" onBlur={(e)=>{setActor("aaa")}}/>
                <label htmlFor="flexRadioDefault1">
                 Home maker
                </label>
            </div>
            <div>
                <input type="radio" name="a" id="b" onBlur={(e)=>{setActor("ccc")}}/*checked*//>
                <label htmlFor="flexRadioDefault2">
                 Consumer
                </label>
            </div><br/><br/>
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
