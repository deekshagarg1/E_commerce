import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Cart2 } from "./Cart2";
import { Cartfinal } from "./Cartfinal";
import { RazorPay } from "./images/RazorPay";

export const Cart = ({ cartItem , liked }) => {
  const [product, setproduct] = useState([]);

  // -----------
  // check---
  function cart(item) {
    // check if item already exists in cart
    const existingItem = product.find((p) => p.tittle === item.tittle);
    if (existingItem) {
      setproduct(
        product.map((p) =>
          p.tittle === item.tittle ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setproduct([...product, { ...item, quantity: 1 }]);
    }
    localStorage.setItem = ("cfinal", JSON.stringify(product));
  }

  // instead of---------
  //   function cart(item){
  // const cf=[...product , item]
  // setproduct(cf)
  // localStorage.setItem=("cfinal" , JSON.stringify(cf) )
  //   }
  // ------

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("cfinal"));
    if (d) {
      setproduct(d);
    }
  }, []);
  // const[qty , setQty]=useState(1)

  // --------------
  // check
  const sum = product.reduce(
    (s1, item) => s1 + parseInt(item.price) * item.quantity,
    0
  );

  // instead of----
  // const sum=product.reduce((s1, item)=> s1+ parseInt(item.price),0)

  // -------
  // check
  return (
    <>
      <div className="cart1">
        <div className="cartaa">
          {cartItem.map((item) => (
            <>
              <div className="carta" key={item.tittle}>
                <Cart2 item={item} cart={cart} liked={liked}/>
              </div>
            </>
          ))}
        </div>

        <div className="cartbb">
          <div className="cart-headline">
            <h1>Products</h1>

            {product.map((item) => (
              <Cartfinal item={item} setproduct={setproduct} product={product} />
            ))}

   {/* ------------------------------ */}



            <li className="l11">
              <h2>Total Amount</h2>
              <p>+ ₹{sum * 0.9}</p>
            </li>
          </div>
          {/* ----------------------- */}

          <div className="cartb">
            <li>
              <p>Price of ({product.length}) item</p> <p>₹{sum}</p>
            </li>
            <li>
              <p>Discount</p> <s style={{ color: "green" }}> ₹{sum * 0.1}</s>
            </li>
            <li>
              <p>Delivery Fee</p>
              <p style={{ color: "gray" }}>Free</p>
            </li>
            <li>
              <p>Total Amount</p>
              <p>+ ₹{sum * 0.9}</p>
            </li>
          </div>
<RazorPay  sum={sum}/>

        </div>


      </div>
    </>
  );
};


// ------------

// ---------
// instead of
//   return (
//   < >
//   <div className="cart1">

// <div className="cartaa">
// {cartItem.map((item)=> <><div className="carta">  <Cart2 item={item} cart={cart} /> </div></>)}
// </div>

// <div className="cartbb">
// <div className="cart-headline">
//  <h1>Products</h1>

// {product.map((item)=><Cartfinal item={item}/>)}

// {/*
//  {product.map((item)=><div className="cartb1">

// <li><p>Product</p > <p>₹{item.tittle}</p></li>
// <li><p>Discount</p> <s style={{color:'green'}}> ₹{sum*0.1}</s></li>
// <li><p>Price</p><p style={{color:'gray'}}>{item.price*qty}</p></li>

// <div className="redux">
//             <button
//               className="r-btn"
//               onClick={() => {
//                 setQty(qty+1)

//               }}
//             >
//               +
//             </button>
//             <h3>{qty}</h3>
//             <button
//               className="r-btn"
//               onClick={() => {setQty(qty-1)

//               }}
//             >
//               -
//             </button>

//           </div>
// </div>
// )} */}
// <li className='l11' ><h2>Total Amount</h2><p>+ ₹{sum*0.9}</p></li>
// </div>
// {/* ----------------------- */}

// <div className="cartb">
// <li><p>Price  of ({product.length}) item</p > <p>₹{sum}</p></li>
// <li><p>Discount</p> <s style={{color:'green'}}> ₹{sum*0.1}</s></li>
// <li><p>Delivery Fee</p><p style={{color:'gray'}}>Free</p></li>
// <li><p>Total Amount</p><p>+ ₹{sum*0.9}</p></li>
// </div>

// </div>

//   </div>

//   {/* -------------------------------------------- */}
//   </>
//   )
// }
