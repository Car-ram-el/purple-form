import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import App from './App.jsx'
import './index.css'
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
)