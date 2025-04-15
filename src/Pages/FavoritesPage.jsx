import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteItem from '../components/FavoriteItem';
import { useLanguage } from '../context/LanguageContext';
import '../styles/FavoritesPage.css';

const FavoritesPage = ({ favoriteItems, removeFromFavorites, addToCart, toggleFavorite }) => {
  const { t } = useLanguage();
  
  return (
    <div className="favorites-page container">
      <div className="favorites-header">
        <h1 className="favorites-title">{t('favorites')}</h1>
        <Link to="/" className="back-link">
          <img src="/images/back.svg" alt={t('back')} />
          <span>{t('back')}</span>
        </Link>
      </div>
      
      {favoriteItems.length === 0 ? (
        <div className="empty-favorites">
          <p>{t('emptyFavorites')}</p>
          <Link to="/" className="continue-shopping">
            {t('continueShopping')}
          </Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteItems.map(item => (
            <FavoriteItem 
              key={item.id} 
              item={item} 
              removeFromFavorites={removeFromFavorites}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;