import React, { useState } from 'react'
import { Categories } from './Categories'
import { Card } from './Card';
import { Toggle } from './Toggle';
import { toggle1 } from './tog';

export const Home = ({card1, carti}) => {
const[pop,  setpop]=useState(true);

  return (
<>
<div className="home-main">
<Categories/>
<div className="card-div">{card1.map((item)=><Card item={item} carti={carti}/>)}</div>


{pop &&(
<div className="main-pop">
<div className="pop">

  <button onClick={()=>{setpop(false)}}>X</button>
</div>
</div>)}

<strong>FAQ's</strong>

<div className="tog1">
{toggle1.map ((item)=> <Toggle item={item}/>)}

</div>

</div>

</>
  )
}
export default Home;