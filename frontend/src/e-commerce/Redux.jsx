import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from '../features/counter/counterSlice'

export const Redux = () => {
    // const[h1 , seth1]= useState("")
const msg =useSelector((state)=>state.counter.value)
const dispatch=useDispatch()

  return (
    <div>

        {/* <input type="text" onChange={(e)=>seth1(e.target.value)}/> */}
        <button onClick={()=>{dispatch(increment(msg))}}>+</button>
      
        <h1>  {msg}</h1>    
        
            <button onClick={()=>{dispatch(decrement(msg))}}>-</button>
    

</div>
  )
}
