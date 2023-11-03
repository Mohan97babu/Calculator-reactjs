// import { useState } from "react"
import avatar from "../src/images/avatar.png"
import NavBar from "./Navbar"
import SideBar from "./SideBar"
import { useState } from "react"

const CreateProfile = () => {
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
        colName:"",
        degree:"",
        skills: "",
        passout: "",
        jobType: "",
        incomeRange: "",
        cvFile: "",
    })
    const handleChange = (e) => {
        setCreateProfile(...createProfile, e.target.value)
    }
    const handleSubmit =() =>
    {

        console.log(createProfile);
    }
    return (
        <div className="container-fluid px-0 alignnav ">
            <NavBar />
            <div className="row ">
                <div className="col-2 ">
                    <SideBar />
                </div>
                <div className="col-10">
                    <div className="row pt-4">
                        <div className="d-flex fw-medium "><h5 className="pe-2 text-secondary">Create Profile</h5> &#10095; <h5 className="ps-2">Add User</h5> </div>
                    </div>
                    <div className="row">
                        <div className="col-3 ">
                            <div className="card   ">
                                <h5 className="card-header "><span className="textcolor1 cursorpoint"> Profile Picture</span></h5>
                                <div className="card-body">
                                    <div className="text-center" >
                                        <img src={avatar} width="200px" height="200px" className="rounded-pill CreAvavtar" />
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary btncolor mt-3 fw-medium ">Upload</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="card fw-medium">
                                <h5 className="card-header  "><span className="textcolor1 cursorpoint">Account Details</span></h5>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputFirstname" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="exampleInputFirstname" aria-describedby="emailHelp" value={CreateProfile.firstName} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputlastname" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="exampleInputlastname" aria-describedby="emailHelp" value={CreateProfile.lastName} onChange={(e) => handleChange(e)} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                            <input type="text" className="form-control" id="exampleInputlastname" aria-describedby="emailHelp" value={CreateProfile.email} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputMobilenumber" className="form-label">Mobile Number</label>
                                            <input type="number" className="form-control" id="exampleInputMobilenumber" aria-describedby="emailHelp"   onChange={(e) => handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputDOB" className="form-label">Date of Birth:</label>
                                            <input type="date" className="form-control" id="exampleInputDOB" aria-describedby="emailHelp"  value={CreateProfile.dob} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6 mt-4">
                                            <label htmlFor="exampleInputGender" className="form-label mt-2">Gender:</label>
                                            <div className="form-check form-check-inline ms-3 mt-3">
                                                <input className="form-check-input shadow-none " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline mt-3">
                                                <input className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                            </div>
                                            <div className="form-check form-check-inline mt-3">
                                                <input className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onClick={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputaddress" className="form-label">Address:</label>
                                            <textarea id="exampleInputaddress" className="form-control address " rows="4" cols="50" value={CreateProfile.address} onChange={(e) => handleChange(e)} >

                                            </textarea>
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="exampleInputpin" className="form-label">Pincode /Zipcode</label>
                                                    <input type="text" className="form-control" id="exampleInputpin" aria-describedby="emailHelp" value={CreateProfile.pinCode} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="exampleInputcountry" className="form-label">Country</label>
                                                <input type="text" className="form-control" id="exampleInputcountry" aria-describedby="emailHelp"  value={CreateProfile.country} onChange={(e) => handleChange(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputcolname" className="form-label">College Name:</label>
                                            <input type="text" className="form-control" id="exampleInputcolname" aria-describedby="emailHelp" value={CreateProfile.colName} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputdegree" className="form-label">Degree</label>
                                            <select className="form-select" aria-label="Default select example" value={CreateProfile.degree}  onChange={(e) => handleChange(e)}>
                                                <option value="">Open this select menu</option>
                                                <option value="1">B.E</option>
                                                <option value="2">B.Sc</option>
                                                <option value="3">M.Sc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputskill" className="form-label">Skills:</label>
                                            <input type="text" className="form-control" id="exampleInputskill" aria-describedby="emailHelp"  value={CreateProfile.skills}  onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputpassout" className="form-label">Passout:</label>
                                            <select className="form-select" aria-label="Default select example"  value={CreateProfile.passout}  onChange={(e) => handleChange(e)}>
                                                <option value="">Open this select menu</option>
                                                <option value="1">2018</option>
                                                <option value="2">2017</option>
                                                <option value="3">2016</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6 mt-4">
                                            <label htmlFor="exampleInputjobtype" className="form-label me-3">Job type:</label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"   onChange={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">IT</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"  onChange={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">Core</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="customRange1" className="form-label">Income Range</label>
                                            <input type="range" className="form-range shadow-none" id="customRange1" value={CreateProfile.incomeRange}  onInput={(e) => handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="inputGroupFile01" className="form-label">Upload CV</label>
                                            <div className="input-group mb-3">

                                                <input type="file" className="form-control" id="inputGroupFile01" value={CreateProfile.cvFile}  onInput={(e) => handleChange(e)}/>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="btn btn-primary btncolor fw-medium" onClick ={() =>handleSubmit()}>Submit</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateProfile