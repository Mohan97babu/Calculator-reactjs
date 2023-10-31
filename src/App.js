import React from 'react';
import '../src/Css/Login.css'

import Dashboard from './Dashboard';
// import './App.css';
// import Demo from './main file/Calculator';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function App (){
  return (
    <>
    {/* <Demo /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path= "dashboard" element= {<Dashboard/>} /> 
    </Routes>
    </BrowserRouter>
     {/* <Login /> */}
    </>
  )
}