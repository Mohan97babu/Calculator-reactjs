import NavBar from "../components/layout/Navbar";
import TableMain from "../components/Table/Tablemain";
import SideBar from "../components/layout/Sidebar";

const Dashboard = ({createProfileData,setCreateProfileData,edit,setEdit ,active,setActive}) => {
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
                <NavBar />
                <div className="row">
                    <div className="col-2 background ">
                        <SideBar
                        setEdit={setEdit}
                        active={active}
                        setActive={setActive}                       
                        />
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
                                        <button className="btn btn-primary btncolor w-25" type="submit" >Search</button>
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
            </div>
            
        </>
    )
}
export default Dashboard;