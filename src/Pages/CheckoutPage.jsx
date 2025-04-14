import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/CheckoutPage.css';

const CheckoutPage = ({ cartItems, totalPrice, clearCart }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очистка ошибки при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = `${t('fullName')} ${t('requiredField')}`;
    if (!formData.email.trim()) newErrors.email = `Email ${t('requiredField')}`;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('invalidEmail');
    
    if (!formData.phone.trim()) newErrors.phone = `${t('phone')} ${t('requiredField')}`;
    if (!formData.address.trim()) newErrors.address = `${t('address')} ${t('requiredField')}`;
    
    if (!formData.cardNumber.trim()) newErrors.cardNumber = `${t('cardNumber')} ${t('requiredField')}`;
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) 
      newErrors.cardNumber = t('invalidCard');
    
    if (!formData.cardHolder.trim()) newErrors.cardHolder = `${t('cardHolder')} ${t('requiredField')}`;
    
    if (!formData.expiry.trim()) newErrors.expiry = `${t('expiry')} ${t('requiredField')}`;
    else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) 
      newErrors.expiry = t('invalidFormat');
    
    if (!formData.cvv.trim()) newErrors.cvv = `CVV ${t('requiredField')}`;
    else if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = t('invalidCVV');
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Имитация отправки заказа - текст сообщения зависит от языка
    alert(t('language') === 'ru' ? 'Заказ успешно оформлен!' : 'Order successfully placed!');
    clearCart();
    navigate('/');
  };
  
  return (
    <div className="checkout-page container">
      <div className="checkout-header">
        <h1 className="checkout-title">{t('checkoutTitle')}</h1>
        <Link to="/cart" className="back-link">
          <img src="/images/back.svg" alt={t('back')} />
          <span>{t('backToCart')}</span>
        </Link>
      </div>
      
      <div className="checkout-content">
        <div className="checkout-form-container">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2 className="section-title">{t('contactInfo')}</h2>
              <div className="form-group">
                <label htmlFor="name">{t('fullName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{t('phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="address">{t('address')}</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'error' : ''}
                ></textarea>
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>
            </div>
            
            <div className="form-section">
              <h2 className="section-title">{t('paymentInfo')}</h2>
              <div className="form-group">
                <label htmlFor="cardNumber">{t('cardNumber')}</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className={errors.cardNumber ? 'error' : ''}
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="cardHolder">{t('cardHolder')}</label>
                <input
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleChange}
                  placeholder="IVAN IVANOV"
                  className={errors.cardHolder ? 'error' : ''}
                />
                {errors.cardHolder && <span className="error-message">{errors.cardHolder}</span>}
              </div>
              
              <div className="payment-row">
                <div className="form-group small">
                  <label htmlFor="expiry">{t('expiry')}</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className={errors.expiry ? 'error' : ''}
                  />
                  {errors.expiry && <span className="error-message">{errors.expiry}</span>}
                </div>
                
                <div className="form-group small">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="password"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className={errors.cvv ? 'error' : ''}
                  />
                  {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
              </div>
            </div>
            
            <button type="submit" className="submit-button">{t('pay')} {totalPrice} ₽</button>
          </form>
        </div>
        
        <div className="order-summary">
          <h2 className="section-title">{t('yourOrder')}</h2>
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-info">
                  <img src={item.img} alt={item.title} className="order-item-image" />
                  <div>
                    <p className="order-item-title">{item.title}</p>
                    <p className="order-item-qty">{t('quantity')}: {item.quantity}</p>
                  </div>
                </div>
                <p className="order-item-price">{item.price * item.quantity} ₽</p>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>{t('total')}:</span>
            <span>{totalPrice} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;