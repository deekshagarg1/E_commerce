import React, { useState } from 'react'

export const Cartfinal = ({item}) => {
    const[qty , setQty]=useState(1)
  return (
    <>
    
    
    <div className="cartb1">

<li><p>Product</p > <p>₹{item.tittle}</p></li>
<li><p>Price</p><p style={{color:'gray'}}>{item.price*qty}</p></li>
<li><p>Discount</p> <s style={{color:'green'}}> ₹{item.price*0.1*qty}</s></li>
<li><p>final</p><p style={{color:'gray'}}>{item.price*0.9*qty}</p></li>


<div className="redux">
            <button
              className="r-btn"
              onClick={() => {
                setQty(qty+1)}}>
              +
            </button>
            <h3>{qty}</h3>
            <button
              className="r-btn"
              onClick={() => {setQty(qty-1) && qty>=1 }}>
              -
            </button>

          
          </div>
</div>
    
    </>
  )
}
