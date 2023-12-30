import React from 'react';
import '../src/assets/css/App.css';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import ApiTable from './pages/RegisterUser';
import { useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import Demo from './pages/Calculator';
import PrivateRoutes from "../src/PrivateRoutes/PrivateRoutes";
import { useEffect } from 'react';
import SideBar from './components/layout/Sidebar';
import NavBar from './components/layout/Navbar';
import ProductShow from './pages/ProductShow';
import ProductForm from './pages/ProductForm';
import SingleProductShow from './pages/SingleProductShow';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');
  const [data, setData] = useState([]);
  const [editOn, setEditOn] = useState(false);
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
  const [addProducts,setAddProducts] = useState({
    imageurl:"",
    title:"",
    category:"",
    price :"",
    count :"",
    rating :0,
    description :"",
});
  const currentpath = window.location.pathname;
  
  useEffect(() => {
    localStorage.setItem('isSignedIn', isSignedIn.toString());
     if(currentpath === "/")
  {   
    setIsSignedIn(false);
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("isSignedIn");
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

      <div className='container-fluid p-0'>
        <BrowserRouter>         
          {currentpath !== "/" && isSignedIn ? 
          <div className='container-fluid '>
          <div className='row'>
              <div className='col-12 ps-0 '>
                <NavBar
                 setIsSignedIn={setIsSignedIn} />
              </div>
            </div>
          </div>
             :null}
          <div className='row'>
          {currentpath !== "/" && isSignedIn ?
            <div className={`col-2 ${currentpath === "/dashboard" ||  currentpath === "/user-list" || currentpath === "/new-user" || currentpath === "/product-form" || currentpath === "/product-show"  ? "background" : "" } `}>
              <SideBar 
              active={active}
              setActive={setActive}
              setEdit={setEdit}
              setEditOn ={setEditOn}/>
            </div> : null }
            <div className ={`${currentpath !== "/"? "col-10 pe-5" : "col-12 pe-0"}`}>
              <Routes>
                <Route path="/" element={<Login  setIsSignedIn={setIsSignedIn} />} />
                <Route element={<PrivateRoutes isSignedIn={isSignedIn}  />} >
                  <Route path="/dashboard" element={<Dashboard createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit} setEdit={setEdit}  />} />
                  <Route path="/create-profile" element={<CreateProfile setCreateProfile={setCreateProfile} createProfile={createProfile} createProfileData={createProfileData} setCreateProfileData={setCreateProfileData} edit={edit}  />} />
                  <Route path="/calculator" element={<Demo  />} />
                  <Route path="/new-user/" element={<NewUser setData={setData} formData={formData} setFormData={setFormData} clearState={clearState}  />} />
                  <Route path="/edit-user/:id" element={<NewUser  setData={setData} formData={formData} setFormData={setFormData} clearState={clearState}  />} />
                  <Route path="/user-list" element={<ApiTable  data={data} setData={setData} />} />
                  <Route path="/product-list" element={<ProductShow  />} />   
                  <Route path="/product-form" element={<ProductForm  addProducts={addProducts} setAddProducts={setAddProducts} setEditOn={setEditOn} editOn={editOn}/>} />
                   <Route path="/product-form/:id" element={<ProductForm  addProducts={addProducts} setAddProducts={setAddProducts} setEditOn={setEditOn} editOn={editOn} />} />
                   <Route path ="/product-show/:id" element={<SingleProductShow setEditOn={setEditOn} editOn={editOn} />} />
                </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}