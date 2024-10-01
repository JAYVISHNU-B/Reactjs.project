import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="navbar">
      <h1>Happy Store</h1>
      <button className="cart-btn" onClick={openCart}>
        Cart ({cartCount})  
      </button>
    </nav>
  );
};

export default Navbar;
