import React from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = ({ product, onAddToCart, onClose }) => {
  const { title, price, oldPrice, img, rating, category } = product;
  
  // Дополнительная информация о товаре (в реальном приложении эти данные могли бы приходить с сервера)
  const productDetails = {
    wired: {
      title: "Проводные наушники",
      description: "Классические проводные наушники с высоким качеством звука. Не требуют зарядки, подключаются через 3.5мм разъем. Идеальны для повседневного использования.",
      features: [
        "Длина кабеля: 1.2 м",
        "Импеданс: 32 Ом",
        "Частотный диапазон: 20 Гц - 20 кГц",
        "Чувствительность: 103 дБ",
        "Вес: 18 г"
      ]
    },
    wireless: {
      title: "Беспроводные наушники",
      description: "Современные беспроводные наушники с Bluetooth-подключением. Свобода движения без проводов и высокое качество звучания.",
      features: [
        "Bluetooth версия: 5.0",
        "Время работы: до 5 часов",
        "Радиус действия: до 10 м",
        "Встроенный микрофон",
        "Поддержка: HSP, HFP, A2DP, AVRCP",
        "Вес: 45 г"
      ]
    }
  };
  
  const details = productDetails[category];
  
  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={img} alt={title} />
      </div>
      <div className="product-detail-info">
        <h2 className="product-detail-title">{title}</h2>
        <div className="product-detail-meta">
          <div className="product-detail-rating">
            <img src="/images/star.svg" alt="Rating" />
            <span>{rating}</span>
          </div>
          <div className="product-detail-category">{details.title}</div>
        </div>
        <div className="product-detail-price">
          <span className="current-price">{price} ₽</span>
          {oldPrice && <span className="old-price">{oldPrice} ₽</span>}
        </div>
        <div className="product-detail-description">
          <p>{details.description}</p>
        </div>
        <div className="product-detail-features">
          <h3>Характеристики:</h3>
          <ul>
            {details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="product-detail-actions">
          <button 
            className="add-to-cart-button" 
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;