import React from 'react';
import './index.css';
import App from './App';
import BackButton from './components/HomeButton';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chocolate from './routes/Chocolate';
import Cookie from './routes/Cookie';
import Coke from './routes/Coke';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/chocolate" element={<Chocolate />} />
  <Route path="/cookie" element={<Cookie />} />
  <Route path="/coke" element={<Coke />} />
  <Route path="/" element={<BackButton />} />
  </Routes>
  </BrowserRouter>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
