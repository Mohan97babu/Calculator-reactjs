import { useState } from "react"
import Reactlogin from "../src/images/Reactlogin.png"
import reactlogotrans1 from "../src/images/reactwhitetextlogin-removebg-preview.png"

import { useNavigate } from "react-router-dom";
const Login = () => {
     const navigate = useNavigate();
    const [login,setLogin] = useState({
        userName :"",
        password :"",
        show:true
    })
    
    const handleChange =(e) =>
    {
        setLogin({...login,[e.target.name] : [e.target.value]})
    };
    const handleSubmit =() =>
    {  
        setLogin({...login,show:!login.show})
        console.log(login)
        navigate("/dashboard")
    }
    return (
        <>
            <div className="container-fluid background d-flex justify-content-center align-items-center p-0 cardcolor ">
            { 
            <div className="row w-100 h-100">
                    <div className="col-6 d-flex justify-content-center align-items-center back curved  p-0">
                        <div className="card rounded-0 border-0 back1 w-75">
                            <div className="row back1 ">
                                <img src={reactlogotrans1} width="200px" height="200px" alt="....." className="logo1 back " />
                            </div>
                            <div className="row back bord ">
                                <h3 className="border-0 text-white text-center">Welcome To CONNECT</h3>
                            </div>
                            <div className="row alignimage  ">
                            <img src={Reactlogin} className="image back "  alt="...." />
                            </div>
                            <div className="row back bord ">
                            <p className="border-0 text-white fs-5 fw-medium text-center"> A Connect Between Job Providers And Job Seekers </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center  cardcolor border-0">
                        <div className="card w-75 p-3 cardcolor back border-0 rounded-5">
                            <img src={reactlogotrans1} alt="....." className="logo" />
                            <div className="mb-3">
                                <label htmlFor="exampleformControlInput1" className="form-label text1 textcolor fw-medium">Username</label>
                                <input type="text" className="form-control inputfield " id="exampleformControlInput1" name ="userName" value={login.userName} onChange={handleChange} placeholder="Username" />
                            </div>
                            <div className="mb-3"> 
                                <label htmlFor="exampleformControlInput2" className="form-label text1 textcolor fw-medium ">Password</label>
                                <input type="password" className="form-control inputfield" id="exampleformControlInput2" name="password" value={login.password} onChange={handleChange} placeholder="Password" />
                            </div>
                            <div className="row text px-2 mb-2">
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input bg-transparent checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label textcolor" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6 text-end textcolor ">
                                    <span>forgot Password ?</span>
                                </div>
                            </div>
                           
                           <button type="button" className="btn btn-primary btncolor inputfield textcolor border-0 w-100" onClick={(e) => handleSubmit(e) }>LOGIN</button>
                            
                            {/* <div className="row mt-3">
                                <div className="col-12 text-center textcolor">
                                    <span>Need an account?</span><span>Sign up!</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>}
            </div>
           {/* <Outlet /> */}
        </>
    )

}
export default Login;