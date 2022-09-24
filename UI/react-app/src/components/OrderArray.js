import React from "react";
import axios from "axios";
import Cart from "./Cart";
import { useNavigate } from "react-router";
export default function OrderArray(props)
{
  let navigate=useNavigate()
  function orderHandler(pid)
    {
      console.log("pid",pid);
    axios.post("http://localhost:8080/order/deleteorder/"+pid, {   
    }).then((response) => {
        console.log(response.data);
        alert("deleted");
        window.location.reload();
        //navigate("/cart");     
    }).catch((e) => {
        console.log(e);
    })
  } 
    return(
    <div>
      <div className="App">
    <section class="header">
        <div class="navbar-area-2">
      <li class="nav-item">
      <h3><a class="page-scroll" href="/OrderPlaced">Place order</a></h3>
      </li>
   </div>
      </section>
      </div>
        <div className="auth-wrapper">
        <div className="auth-inner">
          <div class="row container">
            <div class="row-2">
    <div class="column">
                <div class="card">
                  <img
                    src="assets\img\post\samosa.jpg"
                    className="card-img-top"
                    alt=""/>
                  <h4 class="card-title">{props.name}</h4>
                  <p>Quantity:{props.quantity} gms</p>
                  <p>valid-till:{props.date}</p>
                  <p>Price:{props.price}/-</p>
                  <p>Category:{props.category}</p>
              
                  <button type="button" class="btn btn-success" value={props.order_id} onClick={(e)=>orderHandler(e.target.value)}>
                      delete</button>
            
                 {/*} <a
                    href="https://play.google.com/store/apps"
                    class="main-btn-2"
                  >
                   Add To Card
    </a>*/}

                </div>
           
    </div>
    </div> </div>
  </div> </div>
    </div>
    );
    }
    