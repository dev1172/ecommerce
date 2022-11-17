import React from "react";
import axios from "axios";
import {useEffect,useState} from "react"
import Button from 'react-bootstrap/Button';
import "./product.css"

function Product() {

  let [content,setContent] = useState(null)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products?limit=20")
      .then(res=>{
        setContent(res.data)
      })
  })
  return(
    <div className="pro-list">
          {content !== null && content.map(item=>
          <div className='cards' >
            <img src={item.image} alt='imag' className='imgs'/>
            <center>
            <h3>Prix :{item.price}</h3></center>
            <Button className='B' variant="outline-dark">buy</Button><br></br>
          </div>)}
    </div>
    )
    
} 

export default Product;
