import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const SideBar = ({ setEdit ,setActive,active,setEditOn}) => {
    
    const handleEdit = () => {
        setEdit({ check: false, index: "" })
        setActive("createprofile");
    }
    
    return (
        <ul className=" cardcolor heights p-2">
            <Link to="/dashboard"  > <li className={`${active === "dashboard"? " a1 rounded-3 text-white":"textcolor2 text-decoration-none"} my-2`} onClick={()=>setActive("dashboard")}>  <div className="Dashboard fw-bold  p-2 ">
                <Icon icon="ic:outline-dashboard"  className="mb-1 ms-3" />  <span className="ms-1  ">Dashboard </span>
            </div> </li> </Link>
            {/* <Link to="/create-profile" > <li className={`${active ==="createprofile"?"a1 rounded-3  text-white":"textcolor2 text-decoration-none"} my-2`} onClick={(e) => handleEdit(e)} > <div className="Createprofile  fw-bold p-2 ">
                <Icon icon="mingcute:user-add-fill"  className="mb-1 ms-3 " /> <span className="ms-1 ">Add User</span>
            </div> </li> </Link> */}
            <Link to="/calculator"> <li  className={`${active ==="Calculator"?"a1 rounded-3  text-white":"textcolor2 text-decoration-none"} my-2`} onClick={()=>(setActive("Calculator"))}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="ph:calculator"  className="mb-1 ms-3" /> <span className="ms-1 ">Calculator</span>
            </div> </li> </Link>
            {/* <Link to="/new-user" > <li className={`${active ==="NewUser"?"a1 rounded-3  text-white":"textcolor2 text-decoration-none"} my-2`} onClick={()=>setActive("NewUser")}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="mingcute:user-add-fill"  className="mb-1 ms-3" /> <span className="ms-1 "> FTS Add User</span>
            </div> </li> </Link> */}
            <Link to="/user-list" > <li className={`${active ==="ApiTable"?"a1 rounded-3  text-white":"textcolor2 text-decoration-none"} my-2`} onClick={()=>setActive("ApiTable")}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="ph:table-fill"  className="mb-1 ms-3" /> <span className="ms-1 ">FTS Dashboard</span>
            </div> </li> </Link>           
            <Link to="/product-list" > <li className={`${active ==="productlist"?"a1 rounded-3  text-white":"textcolor2 text-decoration-none"} my-2`} onClick={()=>setActive("productlist")}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="ic:outline-list"  className="mb-1 ms-3" /> <span className="ms-1 ">Product List</span>
            </div> </li> </Link>           
            {/* <Link to="/product-form" > <li className={`${active ==="productform"?"a1 rounded-3  text-white":"textcolor2 text-decoration-none"} my-2`} onClick={()=>{setActive("productform");setEditOn(false)}}> <div className=" Calculator  fw-bold p-2 ">
                <Icon icon="material-symbols:add-ad"  className="mb-1 ms-3" /> <span className="ms-1 ">Add Product</span>
            </div> </li> </Link>            */}
        </ul>
    )
}
export default SideBar;