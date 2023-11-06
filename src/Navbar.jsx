
import reactlogotrans1 from "../src/images/reactwhitetextlogin-removebg-preview.png"
import avatar from "../src/images/avatar.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg back alignnav">
            <div className="container-fluid">
                <a className="navbar-brand " href="#">
                    <img src={reactlogotrans1} width="150px" height="50px" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fw-bold textcolor me-2">Admin</span>
                                <img src={avatar} className="rounded-pill" width="30" height="30" />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}

                    </ul>
                    {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    <div >
                        <div className="btn-group dropstart bg-transparent">
                            <button type="button" className="btn  dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fw-bold textcolor me-2">Admin</span>
                                <img src={avatar} className="rounded-pill" width="30" height="30" />
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item " href="#"><span className="textcolor1">Action</span></a></li>
                                <li><a className="dropdown-item" href="#"><span className="textcolor1">Another Action</span></a></li>
                                <li><hr className="dropdown-divider" /></li>
                               <Link to ="/" > <li><p className="dropdown-item a2" ><span className="textcolor1 text-decoration-none">Sign Out</span></p></li> </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>



    )
}
export default NavBar