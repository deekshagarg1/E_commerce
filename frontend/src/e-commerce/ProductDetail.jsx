import React from 'react';

export const ProductDetail = ({ card1, handleDelete }) => {
  return (
    <div className="productdetail-main">
      <h1 className="title">PRODUCT LISTED</h1>
      <div className="admin-product">
        {card1.map((item) => (
          <div key={item._id} className="product-card">
            <img src={`http://localhost:5000${item.imageUrl}`} alt={item.tittle} />
            <div className="product-info">
              <h2>{item.tittle}</h2>
              <p>₹ {item.price}</p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
