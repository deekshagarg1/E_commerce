import React, { useRef, useState } from "react";
import { Categories } from "./Categories";
import { Card } from "./Card";
import { Toggle } from "./Toggle";
import { toggle1 } from "./tog";

export const Home = ({ card1, carti, GetProductsById }) => {
  const [pop, setpop] = useState(true);
  const a = useRef();

  function buy() {
    a.current.scrollIntoView({ behaviour: "smooth" });
  }

  const categories = [
    { name: "Ethnic Wear", image: "/src/e-commerce/ethenic.jpeg" },
    { name: "Western Dresses", image: "/src/e-commerce/western.jpeg" },
    { name: "Menswear", image: "/src/e-commerce/men.ethenic.jpg" },
    { name: "Footwear", image: "/src/e-commerce/shoes.jpg" },
    { name: "Home Decor", image: "/src/e-commerce/home_decor.jpg" },
    { name: "Beauty", image: "/src/e-commerce/beauty.png" },
    { name: "Accessories", image: "/src/e-commerce/accessories.jpeg" },
    { name: "Grocery", image: "/src/e-commerce/grocery1.jpeg" },
  ];
  // ---------------

  const categories1 = [
    { label: "Personal Care", img: "/src/e-commerce/personalcare.jpg" },
    { label: "Electronics", img: "/src/e-commerce/electronic.jpeg" },
    { label: "Makeup", img: "/src/e-commerce/beauty.png" },
    { label: "Smart Phones", img: "/src/e-commerce/Smartphone.png" },
    { label: "Men Perfume", img: "/src/e-commerce/perrfune.jpeg" },
    { label: "Bags", img: "/src/e-commerce/accessories.jpeg" },
    { label: "Footwear", img: "/src/e-commerce/shoespng.jpeg" },
  ];

  const brands = [
    "/src/e-commerce/images/mamaearth.png",
    "/src/e-commerce/images/widestone.png",
    "/src/e-commerce/images/plum.png",
    "/src/e-commerce/images/nivea.png",
    "/src/e-commerce/images/himalaya.png",
    "/src/e-commerce/images/mi.png",
    "/src/e-commerce/images/beta.png",
    "/src/e-commerce/images/wow.png",
    // '/src/e-commerce/accessories.jpeg'
  ];

  const trendItems = [
    { label: "Summer Dresses", img: "/src/e-commerce/images/summer.jpg" },
    { label: "Baggy Jeans", img: "/src/e-commerce/images/baggy_jeans.jpg" },
    { label: "Earrings", img: "/src/e-commerce/images/earrings.jpg" },
    { label: "Chic Flats", img: "/src/e-commerce/images/flats.jpg" },
  ];

  return (
    <>
      <div className="home-main">
        <Categories />
        {/* ----------- */}
        <div className="home-hero">
          <div className="page-container">
            {/* Banner Section */}
            <div className="banner-container">
              <button className="shop-now-button" onClick={buy}>
                Shop Now
              </button>
            </div>

            {/* Features Row */}
            <div className="features-row">
              <span>🚚 7 Days Easy Return</span>
              <span>💵 Cash on Delivery</span>
              <span>🏷️ Lowest Prices</span>
            </div>

            {/* Categories */}
            <div className="category-container">
              {categories.map((cat, idx) => (
                <div className="category-card" key={idx}>
                  <img src={cat.image} alt={cat.name} />
                  <p>{cat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---card--- */}
        <br />
        <br />
        <center ref={a}>
          <h1>Products May you Like</h1>
        </center>
        <br />
        <br />

        <div className="card-div">
          {card1.map((item) => (
            <Card item={item} carti={carti} GetProductsById={GetProductsById} />
          ))}
        </div>

        {/* -------------------- */}
        {pop && (
          <div className="main-pop">
            <div className="pop">
              <center>
                <div className="pop-content">
                  <h1 style={{ color: "white" }}>E-COMMERCE STORE</h1>
                </div>
              </center>
              <button
                onClick={() => {
                  setpop(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* --------------- */}
        <div className="slider-home">
          <div className="homepage">
            <h2 className="title">Original Brands</h2>

            <div className="slider scroll-x">
              {categories1.map((item, index) => (
                <div className="slider-item" key={index}>
                  <img src={item.img} alt={item.label} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="slider scroll-x brand-logos">
              {brands.map((src, index) => (
                <div className="brand-logo" key={index}>
                  <img src={src} alt="brand" />
                </div>
              ))}
            </div>

            <div className="trendz-banner">
              <div className="left">
                <h1>
                  <span>#TRENDZ</span>
                </h1>
                <button className="shop-btn">Shop Now</button>
              </div>
              <div className="right">
                {trendItems.map((item, i) => (
                  <div className="trend-item" key={i}>
                    <img src={item.img} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ------------- */}
        {/* <strong>FAQ's</strong> */}
        <br />
        <br />
        <br />
        <h1>FAQ's</h1>

        <div className="tog1">
          {toggle1.map((item) => (
            <Toggle item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
