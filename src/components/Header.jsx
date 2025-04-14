import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Header.css';

const Header = ({ cartCount }) => {
  const { t } = useLanguage();
  
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="QPICK" />
        </Link>
        <div className="header-actions">
          <div className="action-icon">
            <img src="/images/favorite.svg" alt={t('favorites')} />
          </div>
          <Link to="/cart" className="action-icon cart-icon">
            <img src="/images/cart.svg" alt={t('cart')} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;