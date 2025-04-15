import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  
  // Загрузка данных корзины из SessionStorage при запуске
  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    // Загрузка данных избранного из localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavoriteItems(JSON.parse(savedFavorites));
    }
  }, []);
  
  // Сохранение данных корзины в SessionStorage при изменении
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Сохранение данных избранного в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  
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
  
  // Функция добавления или удаления товара из избранного
  const toggleFavorite = (product) => {
    const isFavorite = favoriteItems.some(item => item.id === product.id);
    
    if (isFavorite) {
      // Если товар уже в избранном, удаляем его
      setFavoriteItems(favoriteItems.filter(item => item.id !== product.id));
    } else {
      // Если товара нет в избранном, добавляем его
      setFavoriteItems([...favoriteItems, product]);
    }
  };
  
  // Функция проверки, находится ли товар в избранном
  const isInFavorites = (productId) => {
    return favoriteItems.some(item => item.id === productId);
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
  
  // Функция удаления товара из избранного
  const removeFromFavorites = (id) => {
    setFavoriteItems(favoriteItems.filter(item => item.id !== id));
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
          <Header 
            cartCount={getTotalItemsCount()} 
            favoritesCount={favoriteItems.length}
          />
          <main className="main-content">
            <Routes>
              <Route 
                path="/" 
                element={
                  <CatalogPage 
                    addToCart={addToCart} 
                    toggleFavorite={toggleFavorite}
                    isInFavorites={isInFavorites}
                  />
                } 
              />
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
              <Route 
                path="/favorites" 
                element={
                  <FavoritesPage 
                    favoriteItems={favoriteItems} 
                    removeFromFavorites={removeFromFavorites} 
                    addToCart={addToCart}
                    toggleFavorite={toggleFavorite}
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