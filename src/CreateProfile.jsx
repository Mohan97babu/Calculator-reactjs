import avatar from "../src/images/avatar.png"
const CreateProfile = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4  ">
                    <div className="card ">
                        <h5 className="card-header">Profile Picture</h5>
                        <div className="card-body">
                            <div className="text-center" >
                                <img src={avatar} width="200px" height="200px" className="rounded-pill CreAvavtar" />
                            </div>
                            <div className="text-center">
                                <a href="#" className="btn btn-primary btncolor mt-3 ">Upload</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <h5 className="card-header">Account Details</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row mt-3" >
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Gender:</label>
                                    <div class="form-check form-check-inline ms-3">
                                        <input class="form-check-input shadow-none " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                        <label class="form-check-label" for="inlineRadio3">Others</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">E-mail</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Date of Birth:</label>
                                    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Address:</label>
                                    <textarea id="textarea" className="form-control address " rows="4" cols="50">

                                    </textarea>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="exampleInputEmail1" class="form-label">Pincode /Zipcode</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label for="exampleInputEmail1" class="form-label">Country</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">College Name:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Degree</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Skills:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-6">
                                    <label for="exampleInputEmail1" class="form-label">Passout:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6 mt-3">
                                    <label for="exampleInputEmail1" class="form-label me-3">Job type:</label>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">IT</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label class="form-check-label" for="inlineCheckbox2">Core</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label for="customRange1" class="form-label">Income Range</label>
                                    <input type="range" class="form-range" id="customRange1"   />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label for="customRange1" class="form-label">Upload CV</label>
                                    <div class="input-group mb-3">

                                        <input type="file" class="form-control" id="inputGroupFile01" />
                                    </div>
                                </div>

                            </div>
                            <button className="btn btn-primary">Submit</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateProfile