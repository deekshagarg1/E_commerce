import React, { useState } from 'react'

export const Toggle = ({item}) => {
const[to, setto]=useState (false)

function togfun(){
    setto(!to)
}

  return (
    <>
    <div className="toggle">
<div className="togglea"><h2>{item.q}</h2> <button id='tog-btn' onClick={togfun}> {to ? "-" :"+"}</button></div>
<div className="toggleb">{to && <p>{item.a}</p>}</div>

    </div>
    
    </>
  )
}
