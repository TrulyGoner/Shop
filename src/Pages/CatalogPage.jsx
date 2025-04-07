import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import '../styles/CatalogPage.css';

const CatalogPage = ({ addToCart }) => {
  // Разделение товаров по категориям
  const wiredHeadphones = products.filter(product => product.category === 'wired');
  const wirelessHeadphones = products.filter(product => product.category === 'wireless');
  
  return (
    <div className="catalog-page container">
      <section className="products-section">
        <h2 className="section-title">Наушники</h2>
        <div className="products-grid">
          {wiredHeadphones.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </section>
      
      <section className="products-section">
        <h2 className="section-title">Беспроводные наушники</h2>
        <div className="products-grid">
          {wirelessHeadphones.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;