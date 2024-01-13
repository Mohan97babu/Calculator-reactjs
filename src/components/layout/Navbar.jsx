import reactlogotrans1 from "../../assets/images/reactlogotrans1.png"
import avatar from "../../assets/images/avatar.png"
import { Link } from "react-router-dom"
import SideBar from "./Sidebar"

const NavBar = ({setIsSignedIn,active,setActive,setEdit,setEditOn}) => {
    return (
        <nav className="navbar navbar-expand-lg back alignnav">
            <div className="container-fluid">
                <button className="navbar-toggler  d-sm-block d-md-none  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand " >
                    <img src={reactlogotrans1} width="150px" height="50px" alt ="...."/>
                </a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 d-sm-block d-md-none">
                        <SideBar 
                           active={active}
                           setActive={setActive}
                           setEdit={setEdit}
                           setEditOn ={setEditOn}
                        />
                    </div>                  
                </div>
                    <div>
                        <div className="btn-group dropstart bg-transparent d-none d-sm-none d-md-block ">
                            <button type="button" className="btn  dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fw-bold textcolor me-2">Admin</span>
                                <img src={avatar} className="rounded-pill" width="30" height="30"  alt ="..."/>
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item " ><span className="textcolor1">Action</span></a></li>
                                <li><a className="dropdown-item" ><span className="textcolor1">Another Action</span></a></li>
                                <li><hr className="dropdown-divider" /></li>
                               <Link to ="/" > <li onClick={() => {setIsSignedIn(false);  }}><p className="dropdown-item a2" ><span className="textcolor1 text-decoration-none">Sign Out</span></p></li> </Link>
                            </ul>
                        </div>
                        <div className="btn-group dropdown bg-transparent d-block d-sm-block d-md-none text-end">
                            <ul className="dropdown-menu dropdown-menu-end">
                               <Link to ="/" > <li><p className="dropdown-item a2" ><span className="textcolor1 text-decoration-none">Sign Out</span></p></li> </Link>
                            </ul>
                            <button type="button" className="btn  dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                               
                                <img src={avatar} className="rounded-pill" width="30" height="30" alt="...." />
                            </button>
                        </div>                       
                    </div>
            </div>
        </nav>
    )
}
export default NavBar