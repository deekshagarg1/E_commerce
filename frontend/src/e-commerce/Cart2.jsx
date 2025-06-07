import React, { useState } from "react";

export const Cart2 = ({ item, cart, liked }) => {
  const [qty, setQty] = useState(1);
  return (
    <>
      <div className="card-main1">
        {/* --------------------------------------------new map------------------- */}

        <div className="card1">
          <div className="img-div1">
            {/* <img src={item.im} alt="" /> */}
            <img src={`http://localhost:5000${item.imageUrl}`} alt="" />
          </div>

          <div className="content1">
            <h3>{item.tittle}</h3>
            <h2>₹{item.price}</h2>

            <div className="delivery1"> {item.delivery}</div>

            <div className="rating1">
              <h4> 4.5 ★</h4>
              <p>23394 ratings</p>
            </div>

            {/* ----------------------------------- */}

            <div className="btn-cart1">
              <button onClick={() => cart(item)}>buy</button>
              <div
                className="svg1"
                onClick={() => {
                  liked(item);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="24"
                  fill="currentColor"
                  class="bi-bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </div>
            </div>

            {/* ------------------------- */}
          </div>
        </div>

        {/* ------------------------------- */}
      </div>
    </>
  );
};
