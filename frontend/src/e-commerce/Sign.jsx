import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Sign = () => {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

// for sign up=collect the data from user

const navigate =useNavigate()

  // const navigate = useNavigate();

 

    const collectData= async()=>{ console.warn(name,email,password)
    let result= await fetch("http://localhost:5000/register" ,{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{"content-type":"application/json"}
      
    })
    result = await result.json()
     console.log(result);
     localStorage.setItem("user", JSON.stringify(result))
     navigate("/")

  }

  return (
    <>
    
    <div className="sign-main">
<div className="sign-center">
 
<center><h1>Sign up</h1></center>
<br />
<div className='inp1'>Name: <input type="text" placeholder='Enter Name'    onChange={(e)=>setName(e.target.value)}/></div>

<div className="inp1"> Email: <input type="email" placeholder='Enter Email'  onChange={(e)=>setEmail(e.target.value)}/></div>

<div className="inp1">Password: <input id='password' type="password" placeholder='Enter password'    onChange={(e)=>setPassword(e.target.value)}/></div><br />
<button onClick={collectData}>sign up</button>

</div>
</div>
    </>
  )
}

