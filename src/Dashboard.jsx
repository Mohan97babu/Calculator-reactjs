
import { useState } from "react";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
import TableMain from "./Tablemain";

const Dashboard = ({createProfile,createProfileData,setCreateProfileData,edit,setEdit}) => {
    const tablehead =[
        {label:"S.No."},
        {label:"E-Mail"},
        {label:"Username"},
        {label:"Mobile Number"},
        {label:"Created at"},
        {label:"Modified At"},
        {label:"Actions"}
    ];
   
    const handleInput =(e) =>
    {  
        console.log(typeof(createProfile),"5555")
        e.preventDefault();
    }
    // let result= [Object.entries(createProfile)];

    
    return (
        <>
            {/* <div className="row">
           <div className="col-12">
            <div className="mb-3">
                <label htmlFor="exampleformControlInput1" className="form-label text1 textcolor fw-medium text-black" value={props.userName}>Username :{props.userName}</label>
                
            </div>
           </div>
           <div className="col-12">
            <div className="mb-3">
                <label htmlFor="exampleformControlInput2" className="form-label text1 textcolor fw-medium text-black" value={props.password}>Password :{props.password}</label>
                
            </div>
           </div>
        </div> */}
            <div className="container-fluid px-0 ">
                <NavBar />
                <div className="row">
                    <div className="col-2 background ">
                        <SideBar />
                    </div>
                    <div className="col-10">
                        <div className="row pt-4">
                          <p className="d-flex fw-medium "><h5 className="pe-2 text-secondary">Dashboard</h5> &#10095; <h5 className="ps-2">User table</h5> </p>
                        </div>
                        <div className="card mt-3">
                              <div className=" cardcolor  row  d-flex justify-content-between py-2 mx-0">
                            <div className="col-6">
                            <h5 className=" cursorpoint mb-0 pt-2"><span className="textcolor1">User table</span></h5>
                            </div>
                            <div className="col-6 ">                               
                                    <form className="d-flex justify-content-end" role="search">
                                        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-primary btncolor w-25" type="submit" onClick={(e) =>handleInput(e)}>Search</button>
                                    </form>
                            </div>
                              </div>
                            <div className="card-body  p-0">
                               
                                <table className="table border border-secondary-subtle   cursorpoint">
                                    <thead className="" >
                                        <tr  >
                                            {/* <th ><span className="text-secondary ">S.no</span></th>
                                            <th ><span className="text-secondary">E-mail</span></th>
                                            <th><span className="text-secondary">Username</span></th>
                                            <th><span className="text-secondary">Mobile Number</span></th>
                                            <th><span className="text-secondary">Created at</span></th>
                                            <th><span className="text-secondary">Modified At</span></th>
                                            <th className=""><span className="text-secondary ">Actions</span></th> */}
                                            {tablehead.map((option)=>{
                                                return <th><span className="text-secondary ">{option.label}</span></th>
                                            })}
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <TableMain 
                                        // createProfile ={createProfile}
                                        createProfileData={createProfileData}
                                        setCreateProfileData={setCreateProfileData}
                                        edit={edit}
                                        setEdit={setEdit}
                                        />
                                        
                                        {/* <tr className="  cardcolor ">
                                            <td>1</td>
                                            <td>dshadwef45@gmail.com</td>
                                            <td>cdfefw</td>
                                            <td>5412789112</td>
                                            <td>31/Jan/2023</td>
                                            <td>23/Apr/2023</td>
                                            <td>
                                                <div className="row d-flex  pe-3  ">
                                                 <Link to="/CreateProfile" className="w-25">  <Icon icon="uil:edit" color="#7464bc" width="20" height="20"  /> </Link>
                                                    <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" className="w-25" />
                                                    <Icon icon="carbon:view" color="#7464bc" width="20" height="20" className="w-25" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className=" cardcolor ">
                                            <td >2</td>
                                            <td>dadrgrbwgr@gmail.com</td>
                                            <td>dfrbtbyhq</td>
                                            <td>5412774212</td>
                                            <td>31/Jan/2023</td>
                                            <td>10/Mar/2023</td>
                                            <td>
                                                <div className="row d-flex pe-3 ">
                                                <Link to="/CreateProfile" className="w-25"> <Icon icon="uil:edit" color="#7464bc" width="20" height="20"  /> </Link> 
                                                    <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" className="w-25" />
                                                    <Icon icon="carbon:view" color="#7464bc" width="20" height="20" className="w-25" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className=" cardcolor  ">
                                            <td scope="row" >3</td>
                                            <td >vrgrwherje@gmail.com</td>
                                            <td>veffbvdgv</td>
                                            <td>5412712212</td>
                                            <td>31/Jan/2023</td>
                                            <td>26/Feb/2023</td>
                                            <td>
                                                <div className="row d-flex  pe-3 ">
                                                <Link to="/CreateProfile" className="w-25">  <Icon icon="uil:edit" color="#7464bc" width="20" height="20"  /> </Link>
                                                    <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" className="w-25" />
                                                    <Icon icon="carbon:view" color="#7464bc" width="20" height="20" className="w-25" />
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-between px-2">
                                    <select className="form-select w-25 h-25" aria-label="Default select example">

                                        <option value="1">2 items per page</option>
                                        <option value="2">4 items per page</option>
                                        <option value="3">6 items per page</option>
                                    </select>
                                    <p className="cursorpoint">Total of Entries</p>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true" className="textcolor1">&laquo;</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#"><span className="textcolor1">1</span></a></li>
                                            <li className="page-item"><a className="page-link" href="#"><span className="textcolor1">2</span></a></li>
                                            <li className="page-item"><a className="page-link" href="#"><span className="textcolor1">3</span></a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true" className="textcolor1">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
export default Dashboard;