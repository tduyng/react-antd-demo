import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'src/assets/scss/index.scss';
import App from 'src/App/App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
