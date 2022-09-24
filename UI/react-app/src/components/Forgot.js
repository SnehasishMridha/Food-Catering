import React, { useState } from "react";
import '../App.css';
import axios from 'axios';
import { useNavigate } from "react-router";
const Forgot = () => {

    let [pwd,setPwd]=useState("");
    let [email,setEmail]=useState("");
    let navigate=useNavigate()
    function pwdHandler()
    {       
 
  
   axios.post('http://localhost:8080/signin/changepwd/'+email+'/'+pwd,{})
   .then((response) =>{
     console.log(response.data)
    if(response.data ===null )
    {
     alert("failed");
    }
    else
    {     
     console.log(response.data);
     alert("password has been changed succesfully")

     navigate("/sign-in")
    }
   }).catch(error => {console.log(error); alert("error occured") });

    }
    return(
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
            <h3>Forgot Password</h3>
           
            <div className="mb-3">
                <label>Email address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter your email address" onBlur={(e)=>{setEmail(e.target.value)}}
                required
                />
                 <label>new password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter your new password" onBlur={(e)=>{setPwd(e.target.value)}}
                required
                />
                <button type="button" className="main-btn-2 " onClick={pwdHandler}> 
               set password
               <br/>
                </button>            
            </div><br/>

        </form>
        </div>
        </div>
    );
}

export default Forgot;
