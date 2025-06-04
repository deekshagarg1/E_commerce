import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './e-commerce/Nav'
import { Home } from './e-commerce/Home'
import { Cart } from './e-commerce/cart'
import { Liked } from './e-commerce/Liked'
import { Sign } from './e-commerce/Sign'
import { Login } from './e-commerce/Login'
import { Private } from './e-commerce/Private'
import { Categories } from './e-commerce/Categories'
import { Admin } from './e-commerce/Admin'
import YourComponent from './e-commerce/YourComponent'
import { Your1 } from './e-commerce/Your1'
import NewChat from './NewChat'
import { Redux } from './e-commerce/Redux'


export const App = () => {
// const[pic, setpic]=useState("")
const[ss,setss]=useState([{page:120}])
// const[sstq,setSstq]=useState([{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"},{"id":2,"name":"fuchsia rose","year":2001,"color":"#C74375","pantone_value":"17-2031"},{"id":3,"name":"true red","year":2002,"color":"#BF1932","pantone_value":"19-1664"},{"id":4,"name":"aqua sky","year":2003,"color":"#7BC4C4","pantone_value":"14-4811"},{"id":5,"name":"tigerlily","year":2004,"color":"#E2583E","pantone_value":"17-1456"},{"id":6,"name":"blue turquoise","year":2005,"color":"#53B0AE","pantone_value":"15-5217"}],"support":{"url":"https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral","text":"Tired of writing endless social media content? Let Content Caddy generate it for you."}}])
const[card1 , setcard1]=useState([])
const[cartItem, setcardItem]=useState([])
// const[cartfinal , setcartfinal]=useState([])


// --------------multer-----------------

const handleUpload= async(tittle, price , delivery , imageUrl)=>{

  const formData = new FormData();
  formData.append('tittle' , tittle);
  formData.append('price', price);
  formData.append('delivery' ,  delivery);
  formData.append('image' , imageUrl);

  await fetch('http://localhost:5000/api/products', {
    method: 'POST',
    body: formData,
  });

};

const fetchProducts = async () => {
  const res = await fetch('http://localhost:5000/api/get');
  const data = await res.json();
  setcard1(data)
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


function carti (item){
  const ct=[...cartItem, item]
  setcardItem(ct)
// localStorage.setItem("ct1", JSON.stringify(ct))
}

// function cartfinal(item){
// const cf=[...cartfinal ,item]
// setcartfinal(cf)
// }

useEffect(()=>{
  
  fetchProducts();

// const a= JSON.parse(localStorage.getItem("cd"))
// if(a){
//   setcard1(a)
// }
//  const b=JSON.parse(localStorage.getItem("ct1"))

//  if(b){
//   setcardItem(b)
//  }



},[])



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
    {/* <YourComponent/>

<NewChat/>
    <button   onClick={getPoducts}>click here</button>
    {sstq.length>0&&sstq.map((item)=><>{item.page}
    
    <h1><Your1 dd={item.data}/></h1></>)}
    
   */}
    <center> <h3>E-Commerce Website</h3></center>
   
    <BrowserRouter>
    {/* <Redux/> */}
    <Nav cartItem={cartItem}/>
    {ss.map((item)=><h1>{item.name}</h1>)}
    {/* {card1.map((item)=><>{item.tittle} {item.price} {item.delivery} <img src={item.im} alt="" /> </> )} */}
    <Routes>
      <Route element={<Private/>}>
      {/* <Route path='/admin' element={<Admin  add={add}/>}/> */}
      <Route path='/admin' element={<Admin handleUpload={handleUpload} />}/>

<Route path='/home' element={<Home card1={card1} carti={carti} />}/>
<Route path='/cart' element={<Cart cartItem={cartItem} />}/>
<Route path='/liked' element={<Liked/>}/>
</Route>
<Route path='/' element={<Home card1={card1}/>}/>
<Route path='/sign' element={<Sign/>}/>
<Route path='/login' element={<Login/>}/>


    </Routes>
    
    </BrowserRouter>
    
    
    
    </>
  )
}
export default App;