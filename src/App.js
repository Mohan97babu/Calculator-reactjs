import React from 'react';
import '../src/assets/css/App.css';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import ApiTable from './pages/RegisterUser';
import { useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import Demo from './pages/Calculator';


export default function App() {
//  const [isSignedIn,setIsSignedIn] =useState(null);
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
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        
          <Route path="/dashboard" element={<Dashboard createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} active={active} setActive={setActive} />} />
          <Route path="/create-profile" element={<CreateProfile setCreateProfile={setCreateProfile} createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} active={active} setActive={setActive} />} />
          <Route path="/calculator" element={<Demo active={active} setActive={setActive} setEdit={setEdit} />} />
          <Route path="/new-user/" element={<NewUser active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} formData={formData} setFormData={setFormData}  clearState={clearState} />} />
          <Route path="/edit-user/:id" element={<NewUser active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} formData={formData} setFormData={setFormData}  clearState={clearState} />} />
          <Route path="/user-list" element={<ApiTable active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} formData={formData} setFormData={setFormData} />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}