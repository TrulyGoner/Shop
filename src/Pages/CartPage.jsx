import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useLanguage } from '../context/LanguageContext';
import '../styles/CartPage.css';

const CartPage = ({ cartItems, updateQuantity, removeFromCart, totalPrice }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="cart-page container">
      <div className="cart-header">
        <h1 className="cart-title">{t('cart')}</h1>
        <Link to="/" className="back-link">
          <img src="/images/back.svg" alt={t('back')} />
          <span>{t('back')}</span>
        </Link>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>{t('emptyCart')}</p>
          <Link to="/" className="continue-shopping">
            {t('continueShopping')}
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
              <span className="cart-total-label">{t('total')}</span>
              <span className="cart-total-value">₽ {totalPrice}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              {t('checkout')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;