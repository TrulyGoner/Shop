
import React, { createContext, useState, useContext, useEffect } from 'react';

// Объект с переводами
export const translations = {
  ru: {
    // Общие строки
    buy: 'Купить',
    cart: 'Корзина',
    favorites: 'Избранное',
    contacts: 'Контакты',
    back: 'Назад',
    total: 'ИТОГО',
    emptyCart: 'Ваша корзина пуста',
    emptyFavorites: 'У вас пока нет избранных товаров',
    continueShopping: 'Перейти к покупкам',
    checkout: 'Перейти к оформлению',
    serviceTerms: 'Условия сервиса',
    addToFavorites: 'Добавить в избранное',
    removeFromFavorites: 'Удалить из избранного',
    noDescription: 'Описание отсутствует',
    
    // Названия категорий
    headphones: 'Наушники',
    wirelessHeadphones: 'Беспроводные наушники',
    
    // Оформление заказа
    checkoutTitle: 'Оформление заказа',
    backToCart: 'Вернуться в корзину',
    contactInfo: 'Контактная информация',
    fullName: 'ФИО',
    phone: 'Телефон',
    address: 'Адрес доставки',
    paymentInfo: 'Платежная информация',
    cardNumber: 'Номер карты',
    cardHolder: 'Имя владельца',
    expiry: 'Срок действия',
    pay: 'Оплатить',
    yourOrder: 'Ваш заказ',
    quantity: 'Количество',
    
    // Валидация
    requiredField: 'Требуется',
    invalidEmail: 'Некорректный email',
    invalidCard: 'Некорректный номер карты',
    invalidFormat: 'Формат ММ/ГГ',
    invalidCVV: 'Некорректный CVV',
  },
  en: {
    // Общие строки
    buy: 'Buy',
    cart: 'Cart',
    favorites: 'Favorites',
    contacts: 'Contacts',
    back: 'Back',
    total: 'TOTAL',
    emptyCart: 'Your cart is empty',
    emptyFavorites: 'You don\'t have any favorite items yet',
    continueShopping: 'Continue shopping',
    checkout: 'Proceed to checkout',
    serviceTerms: 'Terms of Service',
    addToFavorites: 'Add to favorites',
    removeFromFavorites: 'Remove from favorites',
    noDescription: 'No description available',
    
    // Названия категорий
    headphones: 'Headphones',
    wirelessHeadphones: 'Wireless Headphones',
    
    // Оформление заказа
    checkoutTitle: 'Checkout',
    backToCart: 'Back to cart',
    contactInfo: 'Contact Information',
    fullName: 'Full Name',
    phone: 'Phone',
    address: 'Delivery Address',
    paymentInfo: 'Payment Information',
    cardNumber: 'Card Number',
    cardHolder: 'Card Holder',
    expiry: 'Expiry Date',
    pay: 'Pay',
    yourOrder: 'Your Order',
    quantity: 'Quantity',
    
    // Валидация
    requiredField: 'Required',
    invalidEmail: 'Invalid email',
    invalidCard: 'Invalid card number',
    invalidFormat: 'Format MM/YY',
    invalidCVV: 'Invalid CVV',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Получение начального языка из localStorage или установка русского по умолчанию
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'ru';
  });

  // Функция для изменения языка
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Получить перевод строки
  const t = (key) => {
    return translations[language][key] || key;
  };

  // Сохранение языка в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста языка
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};