import React, { useState } from 'react';

const YourComponent = () => {
  const [sstq, setSstq] = useState([]);

  const getProducts = async () => {
    try {
      let result = await fetch("https://reqres.in/api/products");
      if (!result.ok) {
        throw new Error('Failed to fetch products');
      }
      result = await result.json();
      setSstq(result.data.data); // assuming your API response is structured this way
      console.log(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <button onClick={getProducts}>Click here</button>

      {sstq.length > 0 ? (
        sstq.map((item, index) => (
          <div key={index}>
            <p>{`This is page: ${item.page}`}</p>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default YourComponent;
