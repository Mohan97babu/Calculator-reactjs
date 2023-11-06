import React from 'react';
import '../src/App.css';

import Dashboard from './Dashboard';


import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SideBar from './SideBar';
import NavBar from './Navbar';
import CreateProfile from './CreateProfile';
import Demo from './main file/Calculator';

export default function App (){
  return (
    <>
    {/* <Demo /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path= "dashboard" element= {<Dashboard/>} /> 
      <Route path="CreateProfile" element ={<CreateProfile />} />
      <Route path="Calculator" element ={<Demo />} />
    </Routes>
    </BrowserRouter>
     {/* <Login /> */}
     {/* <Dashboard /> */}
     {/* <SideBar /> */}
     {/* <NavBar /> */}
     {/* <CreateProfile /> */}
    </>
  )
}