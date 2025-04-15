import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/FavoriteItem.css';

const FavoriteItem = ({ item, removeFromFavorites, addToCart, toggleFavorite }) => {
  const { t } = useLanguage();
  const { id, title, price, oldPrice, img, rating } = item;
  
  const handleRemoveFromFavorites = (e) => {
    e.stopPropagation();
    toggleFavorite(item);
  };
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(item);
  };
  
  return (
    <div className="favorite-item">
      <button className="favorite-button active" onClick={handleRemoveFromFavorites}>
        <img src="/images/favorite-filled.svg" alt={t('removeFromFavorites')} />
      </button>
      
      <div className="favorite-image">
        <img src={img} alt={title} />
      </div>
      
      <div className="favorite-details">
        <h3 className="favorite-title">{title}</h3>
        
        <div className="favorite-rating">
          <img src="/images/star.svg" alt="Rating" />
          <span>{rating}</span>
        </div>
        
        <div className="favorite-price-container">
          <span className="favorite-price">{price} ₽</span>
          {oldPrice && <span className="favorite-old-price">{oldPrice} ₽</span>}
        </div>
        
        <button className="buy-button" onClick={handleAddToCart}>
          {t('buy')}
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;