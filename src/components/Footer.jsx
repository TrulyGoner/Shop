import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const { language, changeLanguage, t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-container container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
        
        <div className="footer-menu">
          <div className="footer-menu-column">
            <Link to="/favorites" className="footer-link">{t('favorites')}</Link>
            <Link to="/cart" className="footer-link">{t('cart')}</Link>
            <Link to="/contacts" className="footer-link">{t('contacts')}</Link>
          </div>
          
          <div className="footer-menu-column">
            <Link to="/terms" className="footer-link">{t('serviceTerms')}</Link>
            <div className="language-selector">
              <span 
                className={`language-item ${language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
              >
                Рус
              </span>
              <span 
                className={`language-item ${language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                Eng
              </span>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/images/vk.svg" alt="VK" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/images/telegram.svg" alt="Telegram" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/images/whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;