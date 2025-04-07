import React from 'react';
import Counter from './Counter';
import '../styles/CartItem.css';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const { id, title, price, img, quantity } = item;
  
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={img} alt={title} className="cart-item-image" />
        <div className="cart-item-counter">
          <Counter 
            value={quantity} 
            onChange={(newValue) => updateQuantity(id, newValue)} 
          />
        </div>
      </div>
      <div className="cart-item-info">
        <h3 className="cart-item-title">{title}</h3>
        <span className="cart-item-price">{price} ₽</span>
      </div>
      <div className="cart-item-actions">
        <button className="delete-button" onClick={() => removeFromCart(id)}>
          <img src="/images/delete.svg" alt="Удалить" />
        </button>
        <div className="cart-item-total-price">
          {price * quantity} ₽
        </div>
      </div>
    </div>
  );
};

export default CartItem;