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
    continueShopping: 'Перейти к покупкам',
    checkout: 'Перейти к оформлению',
    serviceTerms: 'Условия сервиса',
    
    // Названия категорий
    headphones: 'Наушники',
    wirelessHeadphones: 'Беспроводные наушники',
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
    continueShopping: 'Continue shopping',
    checkout: 'Proceed to checkout',
    serviceTerms: 'Terms of Service',
    
    // Названия категорий
    headphones: 'Headphones',
    wirelessHeadphones: 'Wireless Headphones',
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