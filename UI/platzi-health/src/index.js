import React from 'react';
import ReactDOM from 'react-dom/client';
import Web3 from 'web3/dist/web3.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './pages/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Web3ReactProvider } from '@web3-react/core';
import {AuthProvider} from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

function getLibrary(provider) {
  return new Web3(provider);
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
