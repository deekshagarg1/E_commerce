import React from 'react'
import { Cart2 } from './Cart2'
import { Card } from './Card'

export const Liked = ({likedItem , item}) => {
  return (
    <>
    
    <div className="liked-main">



 <div className="liked-item">
<center><h1>Saved Items</h1></center>


      <div className="liked-item1">
         {likedItem.map((item)=> <Card item={item}/>)}
      </div>
 </div>
    </div>
    
    </>
  )
}

