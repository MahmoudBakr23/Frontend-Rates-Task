import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Calendar from './Calendar';
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/calendar' element={<Calendar />} />
      <Route exact path='/user/:id' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
