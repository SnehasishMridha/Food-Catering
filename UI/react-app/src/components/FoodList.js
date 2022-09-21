//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'

const FoodList = () => {
    let [arr,setArr]=useState([]);
    
      useEffect(()=>{
        axios.get('http://localhost:8080/food/getAllFood/',{})
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
                  alert("nothing isn")
                })       
    },[])
    
      return (
        <div>
          {/*<div className="auth-wrapper">
            <div className="auth-inner">
              <div class="row container">
                <div class="row-2">
                  <div className="column">
                    <div className="card">*/}
                      {arr.map((li,ind)=>{
                        return(
                          <FoodListArray key={ind}
                          id={li.id}
                          name={li.name}
                          date={li.date}
                          price={li.price}
                          quantity={li.qnt}
                          category={li.category}
                          data={li.data}
                          unit={li.unit}
                          ></FoodListArray>
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
            </div>
                    </div>*/}
        </div>
      );
    };

export default FoodList;
