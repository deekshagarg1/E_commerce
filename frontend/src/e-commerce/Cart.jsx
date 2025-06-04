import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { Cart2 } from './Cart2'
import { Cartfinal } from './Cartfinal'

export const Cart = ({cartItem}) => {

  const[product, setproduct]=useState([])


  function cart(item){
const cf=[...product , item]
setproduct(cf)
localStorage.setItem=("cfinal" , JSON.stringify(cf) )
  }


  useEffect(()=>{
const d=JSON.parse(localStorage.getItem("cfinal"))
if(d){
  setproduct(d)
}


  },[])
// const[qty , setQty]=useState(1)


const sum=product.reduce((s1, item)=> s1+ parseInt(item.price),0)

  return (
  < >
  <div className="cart1">


<div className="cartaa">
{cartItem.map((item)=> <><div className="carta">  <Cart2 item={item} cart={cart} /> </div></>)}
</div>


 
<div className="cartbb">
<div className="cart-headline">
 <h1>Products</h1>

{product.map((item)=><Cartfinal item={item}/>)}


{/* 
 {product.map((item)=><div className="cartb1">

<li><p>Product</p > <p>₹{item.tittle}</p></li>
<li><p>Discount</p> <s style={{color:'green'}}> ₹{sum*0.1}</s></li>
<li><p>Price</p><p style={{color:'gray'}}>{item.price*qty}</p></li>

<div className="redux">
            <button
              className="r-btn"
              onClick={() => {
                setQty(qty+1)
                
              }}
            >
              +
            </button>
            <h3>{qty}</h3>
            <button
              className="r-btn"
              onClick={() => {setQty(qty-1)
                
              }}
            >
              -
            </button>

          
          </div>
</div>
)} */}
<li className='l11' ><h2>Total Amount</h2><p>+ ₹{sum*0.9}</p></li>
</div>
{/* ----------------------- */}

<div className="cartb">
<li><p>Price  of ({product.length}) item</p > <p>₹{sum}</p></li>
<li><p>Discount</p> <s style={{color:'green'}}> ₹{sum*0.1}</s></li>
<li><p>Delivery Fee</p><p style={{color:'gray'}}>Free</p></li>
<li><p>Total Amount</p><p>+ ₹{sum*0.9}</p></li>
</div>

</div>


  </div>


  
  {/* -------------------------------------------- */}
  </>
  )
}
