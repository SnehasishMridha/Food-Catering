import React from "react";
import axios from "axios";
import Cart from "./Cart";
import { useNavigate } from "react-router";
export default function PostArray(props)
{
  let navigate=useNavigate()
  function orderHandler(pid)
  {
    console.log(pid)
    axios.delete("http://localhost:8080/food/deletefood/"+pid, {   
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
                <p>Quantity:{props.quantity}</p>
                <p>valid-till:{props.date}</p>
                <p>Price:{props.price}/-</p>
                <button type="button" class="btn btn-success" value={props.id} onClick={(e)=>orderHandler(e.target.value)}>
                    Delete Post</button>
          
              </div>
            </div>
  </div>
  </div>
  </div>
</div>
  </div>
  );
    }
    