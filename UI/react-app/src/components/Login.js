//import logo from "./logo.svg";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// Login Form
// Login Form
export default function Login1()
{

  let [email,setEmail] = useState("")
  let [pwd,setPwd] = useState("")
  let navigate = useNavigate()
  let [actor,setActor] = useState("")
  //const dispatch= useDispatch()
 
  function loginHandler()
  {
    console.log("in")
    if(actor==="aaa")
    {
        console.log("admin",email);
        axios.post('http://localhost:8080/signin/loginHome/'+email+'/'+pwd,{})
      .then((response) =>{
            console.log(response.data)
           if(response.data!=null)
           {
            alert("success");
            //sessionStorage["email"]=user.email;
            
              sessionStorage.setItem("email",email);
              console.log(response.data);
              let hid=response.data.id;        
              console.log("home id :",hid);
              sessionStorage.setItem("id",hid);
              navigate("/Posting")
           }
           else 
           {
            alert("failed");
              navigate("/sign-in");
           }
          
      } ).catch(error => {  console.log(error); alert("error occured") });
    }      
 else if(actor==="ccc")
  {
    console.log("consumer")
    axios.post('http://localhost:8080/signin/logincon/'+email+'/'+pwd,{})
      .then((response) =>{
        console.log("customer",response.data)
       if(response.data!=null)
       {
        alert("success");
        sessionStorage.setItem("email",email);
        let cid=response.data.id;
        console.log("home id : ",cid);
        sessionStorage.setItem("id",cid);
        //sessionStorage["email"]=user.email;
          navigate("/FoodList")
       }
       else 
       {
       
        alert("failed");
          navigate("/sign-in");

       }
      
      } ).catch(error => {  console.log(error); alert("error occured") });
  }
}
         return (
      <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
            <h3>Login</h3><br/>
            <label htmlFor="radio"> Homemaker</label>  
            <input type="radio" id="radio" name="r1"  value="aaa" onClick={(e)=>{setActor("aaa")}}/>
           <label htmlFor="radio1">Customer </label>
            <input type="radio" id="radio1" name="r1"  value="ccc" onClick={(e)=>{setActor("ccc")}}/><br/>
          <br/>  <div className="mb-3">
                <label>Email username or address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter username or email"
                onBlur={(e)=>{setEmail(e.target.value)}}
                required
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onBlur={(e)=>{setPwd(e.target.value)}}
                required
                />
            </div>
        
            <div>
                <button type="button" className="main-btn-2 " onClick={loginHandler}>
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
