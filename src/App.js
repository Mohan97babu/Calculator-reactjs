import React from 'react';
import '../src/assets/css/App.css';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import ApiTable from './pages/RegisterUser';
import { useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import Demo from './pages/Calculator';
import PrivateRoutes from "../src/PrivateRoutes/PrivateRoutes";
import { useEffect } from 'react';
import SideBar from './components/layout/Sidebar';
import NavBar from './components/layout/Navbar';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');
  const [data, setData] = useState([]);
  const [createProfile, setCreateProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    pinCode: "",
    country: "",
    colName: "",
    degree: "",
    skills: "",
    passout: "",
    jobType: [],
    incomeRange: "",
    cvFile: "",
  })
  
  const currentpath = window.location.pathname;
  // if(currentpath === "/")
  // {
  //   console.log("in");
  //   setIsSignedIn(false);
  // }
  
  useEffect(() => {
    localStorage.setItem('isSignedIn', isSignedIn.toString());
     if(currentpath === "/")
  {   
    setIsSignedIn(false);
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
  }
  }, [isSignedIn]);

  const [createProfileData, setCreateProfileData] = useState([]);
  const [edit, setEdit] = useState({
    check: false,
    index: "",
  });
  const [active, setActive] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: ""
  });
  const clearState = () => {
    setFormData({
      name: "",
      email: "",
      phone_number: "",
      message: ""
    })
  }
  



  return (
    <>

      <div className='conatiner-fluid'>
        <BrowserRouter>
         
          {currentpath !== "/" ? 
          <div className='container-fluid'>
          <div className='row'>
              <div className='col-12 ps-0 '>
                <NavBar
                 setIsSignedIn={setIsSignedIn} />
              </div>
            </div>
          </div>
             :null}
          <div className='row'>
          {currentpath !== "/" ?
            <div className='col-2 background'>
              <SideBar 
              active={active}
              setActive={setActive}
              setEdit={setEdit}/>
            </div> : null }
            <div className ={`${currentpath !== "/"? "col-10 pe-5" : "col-12 pe-0"}`}>
              <Routes>
                <Route path="/" element={<Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                <Route element={<PrivateRoutes isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} >

                  <Route path="/dashboard" element={<Dashboard createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} active={active} setActive={setActive} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                  <Route path="/create-profile" element={<CreateProfile setCreateProfile={setCreateProfile} createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} active={active} setActive={setActive} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                  <Route path="/calculator" element={<Demo active={active} setActive={setActive} setEdit={setEdit} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                  <Route path="/new-user/" element={<NewUser active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} formData={formData} setFormData={setFormData} clearState={clearState} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                  <Route path="/edit-user/:id" element={<NewUser active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} formData={formData} setFormData={setFormData} clearState={clearState} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
                  <Route path="/user-list" element={<ApiTable active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} formData={formData} setFormData={setFormData} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />

                </Route>
              </Routes>
            </div>
          </div>

        </BrowserRouter>
      </div>
    </>
  )
}