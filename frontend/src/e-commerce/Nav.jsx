import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { LuHeart } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";


export const Nav = ({cartItem}) => {
const[change1 , setchange1]=useState("on")
const[col, setcol]=useState({backgroundColor: "lightgreen"})


const auth=JSON.parse(localStorage.getItem("user"))
const Navigate=useNavigate()


function logout(){
  localStorage.clear();
  Navigate("/sign")
}

function change(){
if(change1=="on"){
  setchange1("off")
  setcol({backgroundColor:"pink"})
  
}


else{
  setchange1("on")
  setcol({backgroundColor:"lightgreen"})
}

}

  return (
    <>
    <div className="nav-main">
   <div className="nav1">
    {auth? <>
    <Link to='/admin'>admin</Link>
   <Link> <p><CiLocationOn style={{width:40, height:30}}/>Location</p></Link>

<div className="nav-search">   <input type="text" placeholder='Search Items Here' /><button><LuSearch   style={{width:40, height:30}}/></button></div>

<Link to='/home'>Home</Link>
<Link to='/liked'><p><LuHeart style={{width:30, height:20}} />Lists</p></Link>

<div className="cart">{cartItem.length>0 &&  <h4>{cartItem.length}</h4>}<Link to='/cart'><p><BsCart2 style={{width:45, height:30}} /></p>
</Link></div>

{/* <h2>{auth.name}</h2> */}

<details>
<summary> <VscAccount style={{width:40, height:25}} /><h3>{auth.name}</h3></summary>
<p><Link onClick={logout}> <p>LogOut</p></Link></p>
</details>

{/* <Link onClick={logout}> <p><VscAccount style={{width:40, height:25}} />LogOut</p></Link> */}

{/* <h2>{auth.name}</h2> */}
<button id='btn-chnage' style={col } onClick={change}>{change1}</button>
</>:<>
<Link to='/admin'></Link>
   <Link> <p><CiLocationOn style={{width:40, height:30}}/>Location</p></Link>

<div className="nav-search">   <input type="text" placeholder='Search Items Here' /><button><LuSearch   style={{width:40, height:30}}/></button></div>

<Link to='/'>Home</Link>
<Link to='/liked'><p><LuHeart style={{width:30, height:20}} />Lists</p></Link>
<div className="cart">{cartItem.length>0 &&  <h4>{cartItem.length}</h4>}<Link to='/cart'><p><BsCart2 style={{width:45, height:30}} /></p>
</Link></div>
{/* <Link to='/'>Home</Link> */}
<Link to='/sign'> Sign Up</Link>
<Link to='/login'>LogIn</Link></>}






   </div>



    </div>
    
    
    
    </>
  )
}
