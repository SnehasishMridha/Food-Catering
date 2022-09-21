import React, { useEffect } from "react";
//import { useState } from "react"
//import { useDispatch} from "react-redux"
import { useNavigate } from "react-router"


export default function Logout()
{
    let navigate=useNavigate();
    useEffect(()=>{
        //let consumer=sessionStorage.getItem('email');
        
        // if(consumer!==null)
        // {
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('password');
            navigate("/");
        // }
        // }else if(homemaker!==null)
        // {
        //     sessionStorage.removeItem('email');           
        //     navigate("/")
        // }
    },[])
    

}