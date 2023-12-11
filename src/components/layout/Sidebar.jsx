import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const SideBar = ({ setEdit ,setActive,active}) => {
    
    const handleEdit = () => {
        setEdit({ check: false, index: "" })
        setActive("createprofile");
    }
    return (
        <div className=" cardcolor heights p-2">
            <Link to="/dashboard"  > <p className={`${active === "dashboard"?" a1 rounded-3 text-white":"text-black text-decoration-none"}`} onClick={()=>setActive("dashboard")}>  <div className="Dashboard fw-bold  p-2 ">
                <Icon icon="ic:outline-dashboard" color="black" className="mb-1 ms-3" />  <span className="ms-1  ">Dashboard </span>
            </div> </p> </Link>
            <Link to="/create-profile" > <p className={`${active ==="createprofile"?"a1 rounded-3  text-white":"text-black text-decoration-none"}`} onClick={(e) => handleEdit(e)} > <div className="Createprofile  fw-bold p-2 ">
                <Icon icon="mingcute:user-add-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 ">Createprofile</span>
            </div> </p> </Link>
            <Link to="/calculator"> <p  className={`${active ==="Calculator"?"a1 rounded-3  text-white":"text-black text-decoration-none"}`} onClick={()=>(setActive("Calculator"))}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="ph:calculator" color="black" className="mb-1 ms-3" /> <span className="ms-1 ">Calculator</span>
            </div> </p> </Link>
            <Link to="/new-user" > <p className={`${active ==="NewUser"?"a1 rounded-3  text-white":"text-black text-decoration-none"}`} onClick={()=>setActive("NewUser")}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="mingcute:user-add-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 "> FTS New User</span>
            </div> </p> </Link>
            <Link to="/user-list" > <p className={`${active ==="ApiTable"?"a1 rounded-3  text-white":"text-black text-decoration-none"}`} onClick={()=>setActive("ApiTable")}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="ph:table-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 ">FTS Registered User</span>
            </div> </p> </Link>           
        </div>
    )
}
export default SideBar;