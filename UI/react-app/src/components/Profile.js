//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'

// User Profile
const Profile = () => {
 let [obj,setObj]=useState("")
   useEffect(()=>{
   let email = sessionStorage.getItem("email");
   axios.post('http://localhost:8080/consumer/getprofile/'+email,{})
   .then((response) =>{
     console.log(response.data)
    if(response.data ===null )
    {
     alert("failed");
    }
    else
    {     
     console.log(response.data);
     setObj(response.data)
    }
   }).catch(error => {console.log(error); alert("error occured") });
 },[])
     return (
       <div className="auth-wrapper">
         <div className="auth-inner">
         <ul class="list-group">          
   <li class="list-group-item" >FirstName:{obj.firstname}</li>
   <li class="list-group-item">LastName: {obj.lastname}</li>
   
 </ul>
 
 </div>
       </div>
    
     );
     }
export default Profile;
