import React from 'react';
import '../src/App.css';

import Dashboard from './Dashboard';
import NewUser from './NewUser';
import ApiTable from './ApiTable';
import { useState } from 'react';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SideBar from './Sidebar';

import CreateProfile from './CreateProfile';
import Demo from './main file/Calculator';

export default function App (){

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
console.log(edit,"5412");
  return (
    <>
    {/* <Demo /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login />}/>
      <Route path= "dashboard" element= {<Dashboard createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} />} /> 
      <Route path="CreateProfile" element ={<CreateProfile  setCreateProfile={setCreateProfile} createProfile={createProfile}  createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit} />} />
      <Route path="Calculator" element ={<Demo />} />
      <Route path="NewUser" element ={<NewUser />} />
      <Route path="ApiTable" element ={<ApiTable />} />

    </Routes>
    </BrowserRouter>
     {/* <Login /> */}
     {/* <Dashboard /> */}
     {/* <SideBar /> */}
     {/* <NavBar /> */}
     {/* <CreateProfile /> */}
     {/* <NewUser /> */}
     {/* <ApiTable />  */}
    </>
  )
}