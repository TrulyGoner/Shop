import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  // Загрузка данных корзины из SessionStorage при запуске
  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  
  // Сохранение данных корзины в SessionStorage при изменении
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Функция добавления товара в корзину
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // Если товар уже в корзине, увеличиваем количество
      setCartItems(
        cartItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
    } else {
      // Если товара нет в корзине, добавляем с количеством 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  // Функция изменения количества товара в корзине
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      // Если количество 0 или меньше, удаляем товар из корзины
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      // Иначе обновляем количество
      setCartItems(
        cartItems.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };
  
  // Функция удаления товара из корзины
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Функция очистки корзины
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Функция подсчета общего количества товаров в корзине
  const getTotalItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  // Функция подсчета общей стоимости корзины
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header cartCount={getTotalItemsCount()} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<CatalogPage addToCart={addToCart} />} />
              <Route 
                path="/cart" 
                element={
                  <CartPage 
                    cartItems={cartItems} 
                    updateQuantity={updateQuantity} 
                    removeFromCart={removeFromCart} 
                    totalPrice={getTotalPrice()}
                  />
                } 
              />
              <Route 
                path="/checkout" 
                element={
                  <CheckoutPage 
                    cartItems={cartItems} 
                    totalPrice={getTotalPrice()} 
                    clearCart={clearCart}
                  />
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;