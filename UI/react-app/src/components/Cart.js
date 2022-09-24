//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link, } from 'react-router-dom'
import OrderArray from "./OrderArray";
//Cart Page
const Cart = () => {
  let [arr,setArr]=useState([]);
  let cid=sessionStorage.getItem("id");
  useEffect(()=>
  {
    console.log("use")
    console.log("cid",cid)
      axios.get('http://localhost:8080/order/getorders/'+cid,{})
              .then((Response)=>{
                  if(Response.data!=null)
                  {
                    
                    console.log("response",Response.data)
                    setArr(Response.data);
                  }else{
                      alert("Nothing is in your cart")
                  }
              })
              .catch(e=>{
                console.log("yes")
              }) }    
            ,[])   
            console.log("out")
    return (
      <div>
                    {arr.map((li,ind)=>{
                      return(
                        <OrderArray key={ind}
                        order_id={li.order_id}
                        name={li.name}
                        date={li.date}
                        price={li.price}
                        quantity={li.qnt}
                        category={li.category}
                        ></OrderArray>
                      );
                    })}
            
      </div>
    ); 

};    
export default Cart;
