import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import ProductDetail from '../components/ProductDetail';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data';
import '../styles/CatalogPage.css';

const CatalogPage = ({ addToCart, toggleFavorite, isInFavorites }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  
  // Разделение товаров по категориям
  const wiredHeadphones = products.filter(product => product.category === 'wired');
  const wirelessHeadphones = products.filter(product => product.category === 'wireless');
  
  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="catalog-page container">
      <section className="products-section">
        <h2 className="section-title">{t('headphones')}</h2>
        <div className="products-grid">
          {wiredHeadphones.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
              onShowDetails={handleShowDetails}
              toggleFavorite={toggleFavorite}
              isInFavorites={isInFavorites}
            />
          ))}
        </div>
      </section>
      
      <section className="products-section">
        <h2 className="section-title">{t('wirelessHeadphones')}</h2>
        <div className="products-grid">
          {wirelessHeadphones.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
              onShowDetails={handleShowDetails}
              toggleFavorite={toggleFavorite}
              isInFavorites={isInFavorites}
            />
          ))}
        </div>
      </section>
      
      {selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart}
            onClose={handleCloseModal}
            toggleFavorite={toggleFavorite}
            isInFavorites={isInFavorites}
          />
        </Modal>
      )}
    </div>
  );
};

export default CatalogPage;