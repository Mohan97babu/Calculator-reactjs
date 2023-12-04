import NavBar from "../components/layout/Navbar"
import { useNavigate } from "react-router-dom"
import SideBar from "../components/layout/Sidebar"
import { useState } from "react"
import avatar from "../assets/images/avatar.png"

const CreateProfile = ({ setCreateProfile, createProfile, setCreateProfileData, createProfileData, edit, setEdit, active, setActive, setPutApiShow }) => {
    const [imagePreview, setImagePreview] = useState(createProfile.imagePreview || null);
    const navigate = useNavigate();
    const clearState = () => {
        setCreateProfile({
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
        });
        navigate("/dashboard");

    }

    const degree = [
        { label: "Choose Degree", value: " " },
        { label: "B.E", value: "B.E" },
        { label: "B.Sc", value: "B.Sc" },
        { label: "M.Sc", value: "M.Sc" },
        { label: "B.Ed", value: "B.Ed" },
        { label: "B.Arch", value: "B.Arch" },
        { label: "B.C.A", value: "B.C.A" },
        { label: "M.C.A", value: "M.C.A" },
        { label: "M.B.A", value: "M.B.A" },
    ];
    const passout = [
        { label: "2023", value: "2023" },
        { label: "2022", value: "2022" },
        { label: "2021", value: "2021" },
        { label: "2020", value: "2020" },
        { label: "2019", value: "2019" },
        { label: "2018", value: "2018" },
        { label: "2017", value: "2017" },
        { label: "2016", value: "2016" },
        { label: "2015", value: "2015" },
        { label: "2014", value: "2014" },
        { label: "2013", value: "2013" },
    ]

    const handleChangeCheck = (e) => {

        if ((e.target.checked)) {
            setCreateProfile({ ...createProfile, jobType: [...createProfile.jobType, e.target.value] })
        }
        else {
            const temp = (createProfile.jobType.filter(

                (item) => item !== e.target.value
            ));
            setCreateProfile({ ...createProfile, jobType: temp })


        }

    }
    const handleChange = (e) => {
        if (e.target.name === 'cvFile') {
            const file = e.target.files[0];

           
            if (file) {
                setImagePreview(URL.createObjectURL(file));
            }
        }

        
        setCreateProfile({ ...createProfile, [e.target.name]: e.target.value, imagePreview });

        // setCreateProfile({ ...createProfile, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {

        if (!edit.check) 
        {
            setCreateProfileData([...createProfileData, createProfile]);
        } else {
            const data = [...createProfileData];
            data[edit.index] = createProfile;
            setCreateProfileData(data);
        }
        navigate("/dashboard");

    }
    return (
        <div className="container-fluid px-0 alignnav ">
            <NavBar />
            <div className="row ">
                <div className="col-2 ">
                    <SideBar
                        active={active}
                        setActive={setActive}
                        setEdit={setEdit}

                    />
                </div>
                <div className="col-10">
                    <div className="row pt-4">
                        <div className="d-flex fw-medium "><h5 className="pe-2 text-secondary">Create Profile</h5> &#10095; <h5 className="ps-2">Account Details</h5> </div>
                    </div>
                    <div className="row">
                        <div className="col-3 ">
                            <div className="card   ">
                                <h5 className="card-header "><span className="textcolor1 cursorpoint"> Profile Picture</span></h5>
                                <div className="card-body">
                                    <div className="text-center" >
                                        {imagePreview ? (
                                            <img  src={imagePreview}  width="200px" height="200px"  className="rounded-pill CreAvavtar" alt="Preview" />
                                         ) : <img src={avatar} width="200px" height="200px" className="rounded-pill CreAvatar" alt="...." />
                                         }
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
                                            <label htmlFor="exampleInputFirstname" className="form-label">First Name:</label>
                                            <input type="text" className="form-control" id="exampleInputFirstname" aria-describedby="emailHelp" name="firstName" placeholder=" Enter First Name" value={createProfile.firstName} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputlastname" className="form-label">Last Name:</label>
                                            <input type="text" className="form-control" id="exampleInputlastname" aria-describedby="emailHelp" value={createProfile.lastName} name="lastName" placeholder="Enter Last Name" onChange={(e) => handleChange(e)} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">E-mail:</label>
                                            <input type="text" className="form-control" id="exampleInputlastname" aria-describedby="emailHelp" value={createProfile.email} name="email" placeholder="Enter E-mail" onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputMobilenumber" className="form-label">Mobile Number:</label>
                                            <input type="number" className="form-control" id="exampleInputMobilenumber" aria-describedby="emailHelp" name="mobile" placeholder="Enter Mobile Number" value={createProfile.mobile} onChange={(e) => handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputDOB" className="form-label">Date of Birth:</label>
                                            <input type="date" className="form-control" id="exampleInputDOB" aria-describedby="emailHelp" name="dob" value={createProfile.dob} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6 mt-4">
                                            <label htmlFor="exampleInputGender" className="form-label mt-2">Gender:</label>
                                            <div className="form-check form-check-inline ms-3 mt-3">
                                                <input className="form-check-input shadow-none " type="radio" name="gender" id="inlineRadio1" value="Male" onClick={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline mt-3">
                                                <input className="form-check-input shadow-none" type="radio" name="gender" id="inlineRadio2" value="Female" onClick={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                            </div>
                                            <div className="form-check form-check-inline mt-3">
                                                <input className="form-check-input shadow-none" type="radio" name="gender" id="inlineRadio3" value="Others" onClick={(e) => handleChange(e)} />
                                                <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputaddress" className="form-label">Address:</label>
                                            <textarea id="exampleInputaddress" className="form-control address " name="address" placeholder="Enter Address" rows="4" cols="50" value={createProfile.address} onChange={(e) => handleChange(e)} >

                                            </textarea>
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="exampleInputpin" className="form-label">Pincode /Zipcode:</label>
                                                    <input type="text" className="form-control" id="exampleInputpin" aria-describedby="emailHelp" placeholder="Enter Pincode /Zipcode" name="pinCode" value={createProfile.pinCode} onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="exampleInputcountry" className="form-label">Country:</label>
                                                <input type="text" className="form-control" id="exampleInputcountry" aria-describedby="emailHelp" placeholder="Enter Country" name="country" value={createProfile.country} onChange={(e) => handleChange(e)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputcolname" className="form-label">College Name:</label>
                                            <input type="text" className="form-control" id="exampleInputcolname" aria-describedby="emailHelp" placeholder="Enter College Name" name="colName" value={createProfile.colName} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputdegree" className="form-label">Degree:</label>
                                            <select className="form-select" aria-label="Default select example" value={createProfile.degree} placeholder="Enter Degree" name="degree" onChange={(e) => handleChange(e)}>

                                                {degree.map((option, index) => {
                                                    return <option value={option.value} key={index}>{option.label}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <label htmlFor="exampleInputskill" className="form-label">Skills:</label>
                                            <input type="text" className="form-control" id="exampleInputskill" aria-describedby="emailHelp" placeholder="Enter Skills" name="skills" value={createProfile.skills} onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputpassout" className="form-label">Passed Out:</label>
                                            <select className="form-select" aria-label="Default select example" value={createProfile.passout} placeholder="Enter Passed Out" name="passout" onChange={(e) => handleChange(e)}>

                                                {passout.map((option, index) => {
                                                    return <option value={option.value} key={index}>{option.label}</option>
                                                })

                                                }

                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6 mt-4">
                                            <label htmlFor="exampleInputjobtype" className="form-label me-3">Job Type:</label>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="IT" name="jobType" onChange={(e) => handleChangeCheck(e)} />
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">IT</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Core" name="jobType" onChange={(e) => handleChangeCheck(e)} />
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">Core</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="customRange1" className="form-label"> Minimum Income Range:</label>
                                            <input type="range" className="form-range shadow-none" id="customRange1" max="20000" step="100" name="incomeRange" value={createProfile.incomeRange} onInput={(e) => handleChange(e)} />
                                            <p className="text-black">{createProfile.incomeRange ? createProfile.incomeRange : 0}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="inputGroupFile01" className="form-label">Upload CV:</label>
                                            <div className="input-group mb-3">

                                                <input type="file" className="form-control" id="inputGroupFile01" name="cvFile" value={createProfile.cvFile} onChange={(e) => handleChange(e)} />
                                            </div>
                                        </div>


                                    </div>
                                    <button className="btn btn-primary btncolor fw-medium" onClick={() => handleSubmit()}>Submit</button>
                                    <button className="btn btn-primary btncolor fw-medium ms-3" onClick={() => clearState()}>Cancel</button>


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