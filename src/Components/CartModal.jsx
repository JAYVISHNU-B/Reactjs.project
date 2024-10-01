import React from 'react';

const CartModal = ({ cart, onRemove, closeCart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={closeCart}>X</button> 
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>  
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => onRemove(item.id)}>Remove</button>  
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
