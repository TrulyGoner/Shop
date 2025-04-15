import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart, onShowDetails }) => {
  const { t } = useLanguage();
  const { title, price, oldPrice, img, rating } = product;
  
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Предотвращает открытие деталей при клике на кнопку
    onAddToCart(product);
  };
  
  return (
    <div className="product-card" onClick={() => onShowDetails(product)}>
      <div className="product-image">
        <img src={img} alt={title} />
      </div>
      
      <div className="product-details">
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <div className="product-price-container">
            <span className="product-price">{price} ₽</span>
            {oldPrice && <span className="product-old-price">{oldPrice} ₽</span>}
          </div>
        </div>
        
        <div className="product-bottom">
          <div className="product-rating">
            <img src="/images/star.svg" alt="Rating" />
            <span>{rating}</span>
          </div>
          
          <button className="buy-button" onClick={handleAddToCart}>
            {t('buy')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;