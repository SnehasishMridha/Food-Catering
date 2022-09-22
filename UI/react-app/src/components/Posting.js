//import logo from "./logo.svg";
//import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link, } from 'react-router-dom'
import HMNavBar from "./HMNavBar";

//Homemaker posting
const Posting=()=> {
    let [image,setImage] = useState("")
    let [name,setName] = useState("")
    let [description,setDescription] = useState("")
    let [category,setCategory] = useState("")
    let [price,setPrice] = useState("")
    let [unit,setUnit] = useState("")
    let [quantity,setQuantity] = useState("")
    let [date,setDate] = useState()
    let navigate = useNavigate()
  
    function postHandler()
    {
      console.log("entered in function")
      axios.post("http://localhost:8080/food/addfood", {
        image: image,
        name: name,
        data: description,
        category: category,
        price: price,
        unit: unit,
        qnt: quantity,
        date: date})
      //  time: time
            .then((data) =>{
             if(data.data === "added")
             {
              
              console.log("added");
              navigate("/PostSuccess")
             }
             else if (data.data === "failed to add")
             {
              alert("failed");
             }
            
            } ).catch(error => {console.log(error); alert("error occured")});
        }
  
    return (
      <div>
        <HMNavBar/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Make your Post here</h3>
            <h4>Please Upload Images</h4>
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="inputGroupFile02" onChange={(e)=>{setImage(e.target.value)}}/>
              <label class="input-group-text" for="inputGroupFile02">
                Upload
              </label>
            </div>
  
            <div className="mb-3">
              <label>Name of the Food:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Food name" onChange={(e)=>{setName(e.target.value)}}
                
              />
            </div>
            <div className="mb-3">
              <label>Description of Food:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label>Category of Food</label>
  
              <div>
                <input
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1" onClick={(e)=>{setCategory("Veg")}}
                />
                <label for="flexRadioDefault1">Vegetarian</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2" onClick={(e)=>{setCategory("Non-veg")}}
                />
                <label for="flexRadioDefault2">Non-Vegetarian</label>
              </div>
            </div>
            <br/><br/>
            <div className="mb-3">
              <label>Food Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter in Rupees" onChange={(e)=>{setPrice(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label>Unit of Serves:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter in Numbers" onChange={(e)=>{setUnit(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label>Quantity of One Serve:</label>
              <input
                type="number"
                className="form-control"
                placeholder="In Grams" onChange={(e)=>{setQuantity(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label>Date of Service:</label>
              <input
                type="date"
                className="form-control" onChange={(e)=>{setDate(e.target.value)}}
                
              />
            </div>
            
          {/*  <div className="mb-3">
              <label>Time of Service:</label>
              <input
                type="time" step="2"
                className="form-control" onChange={(e)=>{setTime(e.target.value)}}
                
              />
    </div>*/}
  
            <div className="d-grid">
              <li class="nav-item">
                <Link
                  className="nav-link"
                  to={"/PostSuccess"}
                  class="main-btn btn-hover wow fadeInUp"
                  data-wow-delay=".6s" onClick={postHandler}
                >
                  Submit 
                </Link>
              </li>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }

export default Posting;
