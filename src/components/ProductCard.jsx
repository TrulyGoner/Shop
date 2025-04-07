import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart, onShowDetails }) => {
  const { title, price, oldPrice, img, rating } = product;
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt={title} />
        <button className="view-details-button" onClick={() => onShowDetails(product)}>
          <img src="/images/eye.svg" alt="View Details" />
        </button>
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
          <button className="buy-button" onClick={() => onAddToCart(product)}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;