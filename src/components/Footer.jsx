import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const { language, changeLanguage, t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img src="/images/logo.svg" alt="QPICK" />
        </div>
        <div className="footer-menu">
          <div className="footer-menu-column">
            <a href="#" className="footer-link">{t('favorites')}</a>
            <a href="#" className="footer-link">{t('cart')}</a>
            <a href="#" className="footer-link">{t('contacts')}</a>
          </div>
          <div className="footer-menu-column">
            <a href="#" className="footer-link">{t('serviceTerms')}</a>
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
          <a href="https://vk.com/neoflex_ru" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/images/vk.svg" alt="VK" />
          </a>
          <a href="https://t.me/neoflexcareers" target="_blank" rel="noopener noreferrer" className="social-link">
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