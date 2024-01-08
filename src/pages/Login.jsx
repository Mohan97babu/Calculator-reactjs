import { useState } from "react"
import Reactlogin from "../assets/images/Reactlogin.png"
import reactlogotrans1 from "../assets/images/reactwhitetextlogin-removebg-preview.png"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = ({ setIsSignedIn }) => {
    const navigate = useNavigate();
    const loginUrl = process.env.REACT_APP_LOGINAPI_NEWUSER;
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    };
    const handleSubmit = () => {
        axios({
            method: "post",
            url: `${loginUrl}`,
            data: login,
        })
            .then(response => {
                const accesstoken = response.data.accesstoken.accessToken;
                const refreshtoken = response.data.refreshtoken;
                localStorage.setItem("accesstoken", JSON.stringify(accesstoken));
                localStorage.setItem("refreshtoken", JSON.stringify(refreshtoken));
                setIsSignedIn(true);
                navigate("/dashboard")
            })
            .catch(err => {console.log(err); navigate("/")});
      
    }

    return (
        <>
            <div className="container-fluid background d-flex justify-content-center align-items-center p-0 cardcolor ">
                <div className="row w-100 h-100">
                    <div className="col-6 d-flex justify-content-center align-items-center back curved  p-0">
                        <div className="card rounded-0 border-0 bg-transparent back1 w-75">
                            <div className="row back1 bg-transparent ">
                                <img src={reactlogotrans1} width="200px" height="200px" alt="....." className="logo1 back " />
                            </div>
                            <div className="row back bord ">
                                <h3 className="border-0 text-white text-center">Welcome To CONNECT</h3>
                            </div>
                            <div className="row alignimage bg-transparent ">
                                <img src={Reactlogin} className="image back " alt="...." />
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
                                <input type="email" className="form-control inputfield " id="exampleformControlInput1" name="email" value={login.email} onChange={handleChange} placeholder="Username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleformControlInput2" className="form-label text1 textcolor fw-medium ">Password</label>
                                <input type="password" className="form-control inputfield" id="exampleformControlInput2" name="password" value={login.password} onChange={handleChange} placeholder="Password" />
                            </div>
                            <button type="button" className="btn btn-primary btncolor inputfield textcolor2 border-0 fw-bold w-100 mt-4" onClick={(e) => handleSubmit(e)}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;