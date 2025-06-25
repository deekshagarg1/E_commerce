import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./e-commerce/Nav";
import { Home } from "./e-commerce/Home";
import { Cart } from "./e-commerce/cart";
import { Liked } from "./e-commerce/Liked";
import { Sign } from "./e-commerce/Sign";
import { Login } from "./e-commerce/Login";
import { Private } from "./e-commerce/Private";
import { Categories } from "./e-commerce/Categories";
import { Admin } from "./e-commerce/Admin";
import Footer from "./e-commerce/Footer";
import { Detail } from "./e-commerce/Detail";
import { ProductDetail } from "./e-commerce/ProductDetail";

export const App = () => {
  const [likedItem, setlikedItem] = useState([]);
  // const[ss,setss]=useState([{page:120}])
  const [card1, setcard1] = useState([]);
  const [card2, setcard2] = useState([]);
  const [cartItem, setcardItem] = useState([]);

  // --------------multer-----------------

  const handleUpload = async (tittle, price, delivery, imageUrl) => {
    const formData = new FormData();
    formData.append("tittle", tittle);
    formData.append("price", price);
    formData.append("delivery", delivery);
    formData.append("image", imageUrl);

    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: formData,
    });
  };

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/get");
    const data = await res.json();
    setcard1(data);
  };

  // ----------seachapi---------------

  const searchProduct = async (search1) => {
    let result = await fetch(`http://localhost:5000/searchapi/${search1}`);
    result = await result.json();
    setcard1(result);
    console.log(result);
    alert("searched");
  };

  // GET product by ID
  const GetProductsById = async (params) => {
    try {
      console.log("Fetching product with ID:", params);

      const response = await fetch(`http://localhost:5000/getdetail/${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched product details:", result);

      // Make sure we store an array in state for mapping
      if (Array.isArray(result)) {
        setcard2(result);
      } else if (result && typeof result === "object") {
        setcard2([result]);
      } else {
        setcard2([{ tittle: "No data found" }]);
      }
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      setcard2([{ tittle: "Error fetching product" }]);
    }
    alert("get by id");
    console.log(result);
  };

  // DELETE product
const handleDelete = async(params)=>{
   const data = await fetch(`http://localhost:5000/delete/${params}`,{
     method:"DELETE"
   })
   const result = await data.json()
   console.log(result)
}

  // -----------------------------------------------------------

  // --------main add function working--------------
  // function add (tittle, price , delivery , img){

  // if(img){
  //   const im= URL.createObjectURL(img)
  //   const card=[...card1, {tittle, price , delivery ,im , qty:0}]
  // setcard1(card)
  // localStorage.setItem("cd", JSON.stringify(card))
  // }}

  function carti(item) {
    const ct = [...cartItem, item];
    setcardItem(ct);
    alert("added to cart");
    // localStorage.setItem("ct1", JSON.stringify(ct))
  }

  function liked(item) {
    const likedfinal = [...likedItem, item];
    setlikedItem(likedfinal);
    alert("added to wishlist");
  }

  // function cartfinal(item){
  // const cf=[...cartfinal ,item]
  // setcartfinal(cf)
  // }

  useEffect(() => {
    fetchProducts();

    // const a= JSON.parse(localStorage.getItem("cd"))
    // if(a){
    //   setcard1(a)
    // }
    //  const b=JSON.parse(localStorage.getItem("ct1"))

    //  if(b){
    //   setcardItem(b)
    //  }
  }, []);

  // backend part
  // const getPoducts= async()=>{
  //   let result = await fetch("http://localhost:7800/products")
  //   // let result = await fetch("https://reqres.in/api/products")
  //   result =await result.json()
  //   // setSstq(result);
  //   setss(result);
  //   console.log(result)
  // }

  // console.log(` this is ${sstq.page}`)
  // useEffect(()=>{
  //   getPoducts()
  //   },[])

  // ---------------------

  return (
    <>
      <center>
        {" "}
        <h3>E-Commerce Website</h3>
      </center>

      <BrowserRouter>
        {/* <Redux/> */}
        <Nav cartItem={cartItem} searchProduct={searchProduct} />

        <Routes>
          <Route element={<Private />}>
            {/* <Route path='/admin' element={<Admin  add={add}/>}/> */}
            <Route
              path="/admin"
              element={<Admin handleUpload={handleUpload} />}
            />
            <Route path="/ProductDetailAdmin" element={<ProductDetail card1={card1}  handleDelete={handleDelete}/>}/>
            <Route
              path="/detail"
              element={<Detail card2={card2} carti={carti} liked={liked} />}
            />
            <Route
              path="/"
              element={
                <Home
                  GetProductsById={GetProductsById}
                  card1={card1}
                  carti={carti}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart cartItem={cartItem} liked={liked} />}
            />
            <Route path="/liked" element={<Liked likedItem={likedItem} />} />
          </Route>

          <Route path="/" element={<Home card1={card1} />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
