// src/ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewChat = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    axios
      .get('https://reqres.in/api/products')
      .then((response) => {
        setProducts(response.data.data); // Response contains the 'data' array
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []); // Empty dependency array to run this effect once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewChat;
