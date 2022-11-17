import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
 function Card(){
const [product,setproduct]=useState([])
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products?limit=5')
   .then((res)=>{setproduct(res.data)})
  },[]);
return(
<a src={"https://fakestoreapi.com/products?limit=5"}>
<div className='contain'>
{product.map(products=>{
return(
<div className='cards' >
<img src={products.image} alt='imag' className='imgs'/>
 <center>
<h3>Prix :{products.price}</h3></center>
<Button className='B' variant="outline-dark">buy</Button><br></br>
 

</div>

)
})}
</div>
</a> 
)};
export default Card;