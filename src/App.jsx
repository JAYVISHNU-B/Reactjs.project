import React, { useState } from 'react';
import Navbar from './components/Navbar';       // Navbar component with cart button
import Products from './components/Products';   // Product listing component
import CartModal from './components/CartModal'; // Modal component for the cart
import './App.css';                             // Import CSS for styling

function App() {
  const [cart, setCart] = useState([]);           
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const addToCart = (product) => {
    const productExists = cart.some(item => item.id === product.id);  

    if (productExists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));  
  };
  const openCart = () => setIsModalOpen(true);
  const closeCart = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar cartCount={cart.length} openCart={openCart} />  
      <Products addToCart={addToCart} />                      
      
      {isModalOpen && (
        <CartModal cart={cart} onRemove={removeFromCart} closeCart={closeCart} />
      )}
    </div>
  );
}

export default App;
