import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CartProvider } from './cartContext/cartContext'
import App from './app.jsx';


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

