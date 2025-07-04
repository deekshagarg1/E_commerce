import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <br /><br /><br />
        <button
        className="product-button"><Link to='/ProductDetailAdmin'>View uploaded products list</Link></button>
      </div>



    </div>
  );
};
