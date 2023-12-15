import {  useState } from "react"
import Reactlogin from "../assets/images/Reactlogin.png"
import reactlogotrans1 from "../assets/images/reactwhitetextlogin-removebg-preview.png"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = ({isSignedIn,setIsSignedIn}) => {
     const navigate = useNavigate();
     const loginUrl = process.env.REACT_APP_LOGINAPI_NEWUSER;
     const refreshUrl = process.env.REACT_APP_REFRESHTOKENAPI_LOGIN;
    // console.log(refreshUrl,"123");
     const refreshtoken = localStorage.getItem("refreshtoken");
  //   console.log(refreshtoken,"456");
    const [login,setLogin] = useState({
        email :"",
        password :"",
               
    }) 
    
    
    const handleChange =(e) =>
    {
        setLogin({...login,[e.target.name] : e.target.value})
    };
    
    // axios.interceptors.request.use(
    //     (config) => {
    //       const accessToken = localStorage.getItem('accesstoken');
    //       if (accessToken) {
    //         config.headers['Authorization'] = `Bearer ${accessToken}`;
    //       }
    //       return config;
    //     },
    //     (error) => {
    //       return Promise.reject(error);
    //     }
    //   );
    
    
    // axios.interceptors.response.use(
    //     (response) => {
    //         if (response.status === 200) {
    //             console.log(response.data);  
    //         }
    //         return response;
    //     },
    //     (error) => {
    //         if ( error.response.status === 400) {
    //             console.log('Redirect to login page.');
               
    //              navigate("/");
                
    //         }   
    //         return Promise.reject(error);
    //     }
    // );
    // axios.interceptors.request.use(
    //     (config) => {
    //         const accessToken = localStorage.getItem('accesstoken');
    //         console.log(accessToken);
    //         if (accessToken) {
    //             config.headers.Authorization = `Bearer ${accessToken}`;
    //             // console.log(config);
    //         }
    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
    // );
    // axios.interceptors.response.use(
    //     (response) => {
    //         if (response.status === 200) {
    //             console.log(response.data);  
    //         }
    //         return response;
    //     },
    //     (error) => {
    //         if ( error.response.status === 400) {
    //             console.log('Redirect to login page.');
                
    //         localStorage.removeItem("accesstoken");
    //             navigate("/");
    //         }   
    //         return Promise.reject(error);
    //     }
    // );
    //  axios.interceptors.request.use(
    //     (config) => {
    //       // Get the access token from wherever you have stored it (e.g., localStorage)
    //       const accessToken = localStorage.getItem('accesstoken');
    
    //       // Add the access token to the request headers
    //       if (accessToken) {
    //         config.headers['Authorization'] = `Bearer ${accessToken}`;
    //       }
    
    //       return config;
    //     },
    //   async  (error) => {
    //       return Promise.reject(error);
    //     }
    //   );
    //   axios.interceptors.response.use(
    //     (response) => {
          
    //       return response;
    //     },
    //     async (error) => {
          
         
    // //   console.log(error.response.status,"12345x`");
    //       if (error.response.status === 400) {
    //         // console.log(refreshtoken,"789");
    //         // console.log(error.response.status,"123");
    //         // const handleRefresh =() =>
    //         // {

    //             axios({
    //                 method:"post",
    //                 url:`${refreshUrl}`,
    //                 data : refreshtoken,
    //             })
    //             .then(response =>{ 
    //                 console.log(response,"12354");
    //                 localStorage.setItem('accesstoken', response.data.access_token); 
    //                  navigate("/"); })
    //             .catch(err => console.log(err))
    //      //   }
           
    //         // handleRefresh();
    //        // originalRequest[`refreshtoken`] = localStorage.getItem("refreshtoken");
    
    //         return Promise.reject(error);
    //       }
    
    //       return Promise.reject(error);
    //     }
    //   );
    const handleSubmit =() =>
    {  
        setIsSignedIn(true);
      // localStorage.setItem("isSignedIn","true");
       axios({
        method:"post",
        url:`${loginUrl}`,
        data: login,
       })
        // axios.post("https://fts-backend.onrender.com/admin/login",login)
        .then(response => {
           
           const accesstoken =response.data.accesstoken.accessToken;
           const refreshtoken =response.data.refreshtoken;
          
           localStorage.setItem("accesstoken", JSON.stringify(accesstoken));
            localStorage.setItem("refreshtoken", JSON.stringify(refreshtoken));
          })
          .catch(err => console.log(err));
        navigate("/dashboard")
    }
    return (
        <>
            <div className="container-fluid background d-flex justify-content-center align-items-center p-0 cardcolor ">            
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
                        <div className="card w-75 p-3  back border-0 rounded-5">
                            <img src={reactlogotrans1} alt="....." className="logo" />
                            <div className="mb-3">
                                <label htmlFor="exampleformControlInput1" className="form-label text1 textcolor fw-medium">Username</label>
                                <input type="email" className="form-control inputfield " id="exampleformControlInput1" name ="email" value={login.email} onChange={handleChange} placeholder="Username" />
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
                        </div>
                    </div>
                </div>
            </div>           
        </>
    )
}
export default Login;