import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import store from './App/store';
import './index.css';
import App from './App';

const persistedStore = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><PersistGate loading={<div>Loading....</div>} persistor={persistedStore}><App/></PersistGate></Provider>);
