import CreateProfile from "./CreateProfile";
import NavBar from "./Navbar";
import SideBar from "./SideBar";

const Dashboard = (props) => {
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
            <div className="container-fluid px-0">
                <NavBar />
                <div className="row">
                    <div className="col-2 ">
                        <SideBar/>
                    </div>
                    <div className="col-10">
                         <CreateProfile />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;