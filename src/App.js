import logo from './logo.svg';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, useNavigate, useNavigationType } from "react-router-dom"
import { createBrowserHistory } from "history"
import './App.css';
// import Home from './page/Home/Home';
import Header from './Component/Header/Header.js';
import { HomeTemplate } from './Template/HomeTemplate';
import Home from './page/Home/Home';
// import Contact from './page/Contact/Contact';
import { AdminTemplate } from './Template/AdminTemplate/AdminTemplate.js';
import AdminKhoahoc from './page/Admin/AdminKhoahoc/AdminKhoahoc.js'
import AddKH from './page/Admin/AdminKhoahoc/AddKH/AddKH';
import React, { Component } from 'react';
import EditKH from './page/Admin/AdminKhoahoc/EditKH/EditKH';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Course from './page/Course/Course';
import Carousel from './page/Home/Component/Carousel/Carousel';

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history} >
      <Routes>
        <Route exact path="/" element={<Home />} >
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Route>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        {/* </Routes> */}
        <Route element={<AdminTemplate />}>
          <Route path='/admin' element={<AdminKhoahoc />} />
          <Route path='/admin/addkh' element={<AddKH />} />
          <Route path='/admin/:id' element={<EditKH />} />
        </Route>
      </Routes>
      {/* <Route exact path='/admin' component/> */}
      {/* <Header /> */}
      {/* <Home /> */}
    </ BrowserRouter>
  );
}

export default App;
