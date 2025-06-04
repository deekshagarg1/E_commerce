// import React, { useState } from 'react'

// export const Admin = ({add , handleUpload}) => {
// const[tittle, settittle]=useState("")
// const[price, setprice]=useState("")
// const[delivery, setdiv]=useState("")
// // const[img, setimg]=useState(null)
// const[imageUrl, setimg]=useState(null)
// // const[pic, setpic]=useState("")
// const[]=useState("")
// const[]=useState("")

//   return (
//     <>
// <div className="admin">

    
// <input type="file" accept='image/*' onChange={(e)=>setimg (e.target.files[0])}  />
//     <input type="text " placeholder='enter the tittle for the itme'  onChange={(e)=>settittle(e.target.value)}/>
//     <input type="text" placeholder='Enter the price' onChange={(e)=>setprice(e.target.value)} />
//     <input type="text"  placeholder=' Ex: free delivery' onChange={(e)=>setdiv(e.target.value)} />
//     {/* <button onClick={()=>{add (tittle, price, delivery, img)}}> Add</button> */}
//     <button onClick={()=>{handleUpload (tittle, price, delivery, imageUrl)}}> Add</button>

// </div>

    
    
//     </>
//   )
// }
import React, { useState } from 'react';
// import './Admin.css'; // Make sure this CSS file is in the same folder

export const Admin = ({ add, handleUpload }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [delivery, setDelivery] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2 className="admin-heading">Add Item</h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageUrl(e.target.files[0])}
          className="admin-input"
        />

        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          className="admin-input"
        />

        <input
          type="text"
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
          className="admin-input"
        />

        <input
          type="text"
          placeholder="Delivery info (e.g. Free Delivery)"
          onChange={(e) => setDelivery(e.target.value)}
          className="admin-input"
        />

        <button
          className="admin-button"
          onClick={() => handleUpload(title, price, delivery, imageUrl)}
        >
          Add
        </button>
      </div>
    </div>
  );
};
