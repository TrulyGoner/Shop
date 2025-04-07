import React from 'react';
import '../styles/Counter.css';

const Counter = ({ value, onChange }) => {
  return (
    <div className="counter">
      <button 
        className="counter-button decrease" 
        onClick={() => onChange(value - 1)}
      >
        -
      </button>
      <span className="counter-value">{value}</span>
      <button 
        className="counter-button increase" 
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;