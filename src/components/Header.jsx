import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Header.css';

const Header = ({ cartCount, favoritesCount }) => {
  const { t } = useLanguage();
  
  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
        
        <div className="header-actions">
          <Link to="/favorites" className="action-icon">
            <img src="/images/favorite.svg" alt={t('favorites')} />
            {favoritesCount > 0 && <span className="favorites-count">{favoritesCount}</span>}
          </Link>
          
          <Link to="/cart" className="action-icon">
            <img src="/images/cart.svg" alt={t('cart')} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;