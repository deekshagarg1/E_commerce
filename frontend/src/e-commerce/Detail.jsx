// import React from 'react'

import React, { useState } from "react";
// import "./ProductDetail.css"; // You’ll create this CSS file



export const Detail = ({card2 , carti , liked}) => {


    const productData = {
  name: "Blue Floral Printed Asymmetric Kurta",
  price: 1259,
  originalPrice: 1799,
  discount: 30,
  colors: ["Teal", "Blue"],
  sizes: [32, 34, 36, 38, 40, 42, 46],
  image: "/blue-kurta.png", // Add image in public folder
};


  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [pincode, setPincode] = useState("");
// useState
  return (
<>
<div className="detail-main">


{Array.isArray(card2) && card2.map((item)=><>
 <div className="container">
      <div className="left">
  <img src={`http://localhost:5000${item.imageUrl}`} alt="" className="main-image"  />
        {/* // <img src={productData.image} alt={productData.name} className="main-image" /> */}
      </div>

      <div className="right">
        <h2 className="product-name">{item.tittle}</h2>
        <p className="price">
          ₹{item.price*0.9}
          <span className="original-price"> ₹{item.price}</span>
          <span className="discount"> {item.price*0.1}%OFF</span>
        </p>

        <div className="section">
          <p>Select Color:</p>
          <div className="button-group">
            {productData.colors.map((color) => (
              <button
                key={color}
                className={`color-button ${selectedColor === color ? "selected" : ""}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Select Size:</p>
          <div className="button-group">
            {productData.sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Delivery:</p>
          <input
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="pincode-input"
          />
        </div>

        <div className="buttons">
          <button className="buy-button" onClick={()=>carti(item)}>Buy Now</button>
          <button className="add-button" onClick={()=>liked(item)}>Add to Wishlist</button>
        </div>

        <div className="highlights">
          <p>✔ Free Shipping</p>
          <p>✔ 10 Days Easy Return</p>
          <p>✔ Assured Quality</p>
          <p>✔ COD Available</p>
        </div>
      </div>
    </div>
</>)}




{/* <h1>hgjhk</h1> */}

    {/* <div className="container">
      <div className="left">
        <img src={productData.image} alt={productData.name} className="main-image" />
      </div>

      <div className="right">
        <h2 className="product-name">{productData.name}</h2>
        <p className="price">
          ₹{productData.price}
          <span className="original-price"> ₹{productData.originalPrice}</span>
          <span className="discount"> ({productData.discount}% OFF)</span>
        </p>

        <div className="section">
          <p>Select Color:</p>
          <div className="button-group">
            {productData.colors.map((color) => (
              <button
                key={color}
                className={`color-button ${selectedColor === color ? "selected" : ""}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Select Size:</p>
          <div className="button-group">
            {productData.sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Delivery:</p>
          <input
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="pincode-input"
          />
        </div>

        <div className="buttons">
          <button className="add-button">Add to Bag</button>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="highlights">
          <p>✔ Free Shipping</p>
          <p>✔ 10 Days Easy Return</p>
          <p>✔ Assured Quality</p>
          <p>✔ COD Available</p>
        </div>
      </div>
    </div> */}




</div>


</>
  )
}
