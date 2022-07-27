import React, {useState, useEffect} from "react";
import axios from 'axios';
 import './products.css';
 function Products (){
const [products, setProducts] = useState([])
useEffect(()=>{
axios.get('http://localhost:5000/products')
.then(res => setProducts(res.data))
})
//setting state from 5-9
    return(<>
    <div className="grid-Container">
    {/* <div className="gridpack-item"> */}
     
          {products.map(x => <div className="card gridpack-item">
        <img src={x.image} alt="Macbook Pro" />
        <h2>{x.imageAlt}</h2>
        
        <p>{x.description}</p>
        <br></br>
        <p>{x.price}</p> <button>Buy Now</button></div>)}
        
      </div></>
  
   
    
     ) }





export default Products;
