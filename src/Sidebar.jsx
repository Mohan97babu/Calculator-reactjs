import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import avatar from "../src/images/avatar.png"
const SideBar = ({ setEdit }) => {
    const handleEdit = () => {

        setEdit({ check: false, index: "" })
    }

    return (

        <div className=" cardcolor heights p-2">
            <Link to="/dashboard" > <p className="text-decoration-none a1 active">  <div className="Dashboard fw-bold a3 p-2 ">
                <Icon icon="ic:outline-dashboard" color="black" className="mb-1 ms-3" />  <span className="ms-1 text-black ">Dashboard </span>
            </div> </p> </Link>
            <Link to="/CreateProfile" onClick={(e) => handleEdit(e)}> <p className="text-decoration-none a1 active"  > <div className="Createprofile a3 fw-bold p-2 ">
                <Icon icon="mingcute:user-add-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 text-black">Createprofile</span>
            </div> </p> </Link>
            <Link to="/Calculator"> <p className="text-decoration-none a1 active"> <div className=" Calculator a3 fw-bold p-2 ">
                <Icon icon="mdi:calculator" color="black" className="mb-1 ms-3" /> <span className="ms-1 text-black">Calculator</span>
            </div> </p> </Link>
            <Link to="/NewUser"> <p className="text-decoration-none a1 active"> <div className=" Calculator a3 fw-bold p-2 ">
                <Icon icon="mingcute:user-add-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 text-black">New User</span>
            </div> </p> </Link>
            <Link to="/ApiTable"> <p className="text-decoration-none a1 active"> <div className=" Calculator a3 fw-bold p-2 ">
                <Icon icon="ph:table-duotone" color="black" className="mb-1 ms-3" /> <span className="ms-1 text-black">Registered User</span>
            </div> </p> </Link>
            <div className="btn-group  bg-transparent dropend  d-sm-block d-md-none">
                <button type="button" className="btn  dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="fw-bold textcolor me-2">Admin</span>
                    <img src={avatar} className="rounded-pill" width="30" height="30" />
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item " href="#"><span className="textcolor1">Action</span></a></li>
                    <li><a className="dropdown-item" href="#"><span className="textcolor1">Another Action</span></a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <Link to="/" > <li><p className="dropdown-item a2" ><span className="textcolor1 text-decoration-none">Sign Out</span></p></li> </Link>
                </ul>
            </div>
        </div>

    )
}
export default SideBar;