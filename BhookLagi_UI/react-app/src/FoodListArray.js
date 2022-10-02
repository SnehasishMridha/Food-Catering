import React from "react";
import axios from "axios";
import {useState } from "react";
export default function FoodListArray(props)
{
  let cid=sessionStorage.getItem("id");
  console.log("cid",cid)
   var  date=new Date();
     /* date= date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2); */

        var dateIST = new Date(date);
        //date shifting for IST timezone (+5 hours and 30 minutes)
        dateIST.setHours(dateIST.getHours() + 5); 
        dateIST.setMinutes(dateIST.getMinutes() + 30);
        
       // var time=new Date().toISOString().slice(11, 19);
        var time=new Date().toLocaleString().slice(11, 19);
       
  function orderHandler()
    {
      console.log("order")
    axios.post("http://localhost:8080/order/addorder", {
        category: props.category,
        date: date,
        time: time,
        name: props.name,
        quant: props.quantity,
        price:props.price,
        consumerId:cid
    }).then((response) => {
        console.log(response.data);
        alert("added to cart");     
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
                  <p>Quantity:{props.quantity} gms</p>
                  <p>valid-till:{props.date}</p>
                  <p>Price:{props.price}/-</p>
                  <button type="button" class="btn btn-success" onClick={orderHandler}>
                      add to cart</button>
                </div>
              </div>
    </div>
    </div>
   </div>
</div>
      </div>
    );
    }