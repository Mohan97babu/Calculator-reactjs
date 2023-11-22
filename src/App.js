import React from 'react';
import '../src/assets/css/App.css';

import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import ApiTable from './pages/RegisterUser';
import { useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import CreateProfile from './pages/CreateProfile';
import Demo from './pages/Calculator';

export default function App (){
  const[data,setData] =useState([]);
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

const [createProfileData,setCreateProfileData] = useState([]);
const[edit,setEdit] = useState({
  check:false,
  index:"",
});
const [active,setActive] =useState('');

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login />}/>
      <Route path= "dashboard" element= {<Dashboard createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} active={active} setActive={setActive}/>} /> 
      <Route path="create-profile" element ={<CreateProfile  setCreateProfile={setCreateProfile} createProfile={createProfile}  createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} active={active} setActive={setActive} />} />
      <Route path="calculator" element ={<Demo active={active} setActive={setActive} setEdit={setEdit} />} />
      <Route path="new-user" element ={<NewUser active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData}/>} />
      <Route path="user-list" element ={<ApiTable active={active} setActive={setActive} setEdit={setEdit} data={data} setData={setData} />} />

    </Routes>
    </BrowserRouter>

    </>
  )
}