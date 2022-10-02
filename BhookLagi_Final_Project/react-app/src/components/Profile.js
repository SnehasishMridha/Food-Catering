//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import HMNavBar from "./HMNavBar";
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
      <div>
          <HMNavBar/>
         
       <div className="auth-wrapper">
         <div className="auth-inner">
         <center><h1>Profile</h1></center>
         <ul class="list-group">          
   <li class="list-group-item" >FirstName:{obj.firstname}</li>
   <li class="list-group-item">LastName: {obj.lastname}</li>
   <li class="list-group-item">Mobile Number:{obj.mobile}</li>
   <li class="list-group-item">Username: {obj.username}</li>
   <li class="list-group-item">Email: {obj.email}</li>
   <li class="list-group-item">Password: {obj.password}</li>
   <li class="list-group-item">Address: {obj.address}</li>
   <li class="list-group-item">Pincode: {obj.pincode}</li>
 </ul>
 
 </div>
       </div></div>
    
     );
     }
export default Profile;
