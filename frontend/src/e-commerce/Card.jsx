import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import {Link} from 'react-router-dom'

export const Card = ({ item, carti ,GetProductsById }) => {


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
            <p><Link to='/detail' onClick={()=>{GetProductsById (item._id)}}>View detail</Link></p>
            {/* <p>23394 ratings</p>{" "} */}
          </div>
        
        </div>

    
      </div>
    </>
  );
};
