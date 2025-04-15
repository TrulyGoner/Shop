import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ProductDetail.css';

const ProductDetail = ({ product, onAddToCart, onClose }) => {
  const { t } = useLanguage();
  const { title, price, oldPrice, img, rating } = product;
  
  const handleAddToCart = () => {
    onAddToCart(product);
    // Опционально можно закрыть модальное окно после добавления в корзину
    // onClose();
  };
  
  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={img} alt={title} />
      </div>
      
      <div className="product-detail-info">
        <h2 className="product-detail-title">{title}</h2>
        
        <div className="product-detail-rating">
          <img src="/images/star.svg" alt="Rating" />
          <span>{rating}</span>
        </div>
        
        <div className="product-detail-price-container">
          <span className="product-detail-price">₽ {price}</span>
          {oldPrice && <span className="product-detail-old-price">₽ {oldPrice}</span>}
        </div>
        
        <p className="product-detail-description">
          {/* Описание продукта можно добавить в данные товара */}
          {product.description || t('noDescription')}
        </p>
        
        <div className="product-detail-actions">
          <button className="buy-button" onClick={handleAddToCart}>
            {t('buy')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;