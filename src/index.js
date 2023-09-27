import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts=[
  {id:1, message:'Hi, how are you',LikesCount:12},
  {id:2, message:'Its myfirst post',LikesCount:3},
  {id:3, message:'where are you live',LikesCount:15},
  {id:4, message:'whats your name',LikesCount:8}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
