//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import HMNavBar from "./HMNavBar";
import { Link, } from 'react-router-dom'
import CNavBar from "./CNavBar";
import FoodListArray from "../FoodListArray";
import PostArray from "./PostArray";
//Post Page
const PostPage = () => {
  let [arr,setArr]=useState([]);
  let hid=sessionStorage.getItem("id")
  console.log(hid)
  useEffect(()=>{
    axios.get('http://localhost:8080/food/getposts/'+hid,{})
            .then(Response=>{
                if(Response.status===200)
                {
                  setArr(Response.data);
                }else{
                    alert("Data Not Found")
                }
            })
            .catch(e=>{
              console.log(e)
              alert("nothing is in the list")
            })       
},[])
  return (
    <div>
            <HMNavBar/>
           <div>
          {/*<div className="auth-wrapper">
            <div className="auth-inner">
              <div class="row container">
                <div class="row-2">
                  <div className="column">
                    <div className="card">*/}
                      {arr.map((li,ind)=>{
                        return(
                          <PostArray key={ind}
                          id={li.id}
                          name={li.name}
                          date={li.date}
                          price={li.price}
                          quantity={li.qnt}
                          category={li.category}
                          data={li.data}
                          unit={li.unit}
                          ></PostArray>
                        );
                      })}
                      {/*<a
                        href="https://play.google.com/store/apps"
                        class="main-btn-2"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          
                    </div>*/}  </div>
        </div>
      
      );
}

export default PostPage;
