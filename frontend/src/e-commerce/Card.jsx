import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { decrement, increment } from "../features/counter/counterSlice";

export const Card = ({ item, carti }) => {
  const dispatch = useDispatch();
  // const msg = useSelector((state) => state.counter.value);

  // const[msg,setMsg]=useState(0)
  const[qty , setQty]=useState(0)

  return (
    <>
      <div className="card-main">
        <div className="card">
          <div className="img-div">
            {/* <img src={item.im} alt="" /> */}
            <img src={`http://localhost:5000${item.imageUrl}`} alt="" />
          </div>
          <h3>{item.tittle}</h3>
          <h2>₹{item.price}</h2>
          <div className="btn-card">
            <div className="delivery">{item.delivery} </div>{" "}
            <button
              onClick={() => {
                carti(item);
              }}
            >
              <p><BsCart2 style={{width:30, height:25}} /></p>
            </button>
          </div>
          <div className="rating">
            <h4> 4.5 ★</h4>
            <p>23394 ratings</p>{" "}
          </div>
        
        </div>

        {/* <div className="card">
<div className="img-div"><img src="" alt="" /></div>
<h3>hello</h3>
<h2>₹ 5000</h2>
<div className="delivery"> free delivery</div>
<div className="rating"><h4> 4.5 ★
 </h4><p>23394 ratings</p></div>
</div> */}
      </div>
    </>
  );
};
