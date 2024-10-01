import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data.slice(0, 8));  
      })
      .catch(error => console.error('Error fetching data:', error));  
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />  
          <h3>{product.title}</h3>                          
          <p>${product.price.toFixed(2)}</p>                
          <button onClick={() => addToCart(product)}>       
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
