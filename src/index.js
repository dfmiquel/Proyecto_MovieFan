import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CartProvider } from './CartContext/CartContext'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

