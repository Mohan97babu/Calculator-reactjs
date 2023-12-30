import { useNavigate } from "react-router-dom";
import TableMain from "../components/Table/Tablemain";
import { Icon } from "@iconify/react";

const Dashboard = ({createProfileData,setCreateProfileData,edit,setEdit }) => {
    const navigate = useNavigate();
    const tablehead =[
        {label:"S.No."},
        {label:"E-Mail"},
        {label:"Username"},
        {label:"Mobile Number"},
        {label:"Created At"},
        {label:"Modified At"},
        {label:"Actions"}
    ];      
    
    return (
        <>          
            <div className="container-fluid px-0 ">
                <div className="row">
                        <div className="row pt-4 pe-0">
                            <div className="col-6">
                          <h5 className="d-flex fw-bold textcolor2 fs-4">Dashboard</h5>

                            </div>
                            <div className="col-6 text-end pe-0">
                                <button className="btn btn-primary btncolor textcolor2" onClick={() => navigate("/create-profile")}>
                                <Icon icon="mingcute:user-add-fill"  className="mb-1 me-2 " />
                                    Add</button>
                            </div>
                        </div>
                        <div className="card mt-3 px-0 ">
                              <div className=" back  row  d-flex justify-content-between py-2 mx-0">
                            <div className="col-6">
                            <h5 className=" cursorpoint mb-0 pt-2"><span className="text-white">Dashboard</span></h5>
                            </div>
                            <div className="col-6 ">                               
                                    <form className="d-flex justify-content-end" role="search">
                                        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-primary btncolor w-25 text-black fw-medium" type="submit" >Search</button>
                                    </form>
                            </div>
                              </div>
                            <div className="card-body  p-0">                               
                                <table className="table border border-secondary-subtle   cursorpoint">
                                    <thead>
                                        <tr>                                           
                                            {tablehead.map((option)=>{
                                                return <th><span className="text-secondary ">{option.label}</span></th>
                                            })}
                                        </tr>
                                    </thead>                                   
                                    <tbody>
                                        <TableMain                                        
                                       createProfileData={createProfileData}
                                        setCreateProfileData={setCreateProfileData}
                                        edit={edit}
                                        setEdit={setEdit}                                       
                                        />                                       
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
                                                <a className="page-link"  aria-label="Previous">
                                                    <span aria-hidden="true" className="textcolor1">&laquo;</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" ><span className="textcolor1">1</span></a></li>
                                            <li className="page-item"><a className="page-link" ><span className="textcolor1">2</span></a></li>
                                            <li className="page-item"><a className="page-link" ><span className="textcolor1">3</span></a></li>
                                            <li className="page-item">
                                                <a className="page-link"  aria-label="Next">
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
        </>
    )
}
export default Dashboard;