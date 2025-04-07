import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../styles/CartPage.css';

const CartPage = ({ cartItems, updateQuantity, removeFromCart, totalPrice }) => {
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="cart-page container">
      <div className="cart-header">
        <h1 className="cart-title">Корзина</h1>
        <Link to="/" className="back-link">
          <img src="/images/back.svg" alt="Назад" />
          <span>Назад</span>
        </Link>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Ваша корзина пуста</p>
          <Link to="/" className="continue-shopping">
            Перейти к покупкам
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity} 
                removeFromCart={removeFromCart} 
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <span className="cart-total-label">ИТОГО</span>
              <span className="cart-total-value">₽ {totalPrice}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Перейти к оформлению
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;