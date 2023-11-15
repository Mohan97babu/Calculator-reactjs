import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
 
const SideBar = ({setEdit}) => {
    const handleEdit =()=>
    {
        
        setEdit({check:false , index:""})
    }
   
    return (
        
            <div className=" cardcolor heights p-2">
                
               <Link to ="/dashboard" > <p className="text-decoration-none a1 active">  <div className="Dashboard fw-bold a3 p-2 ">
                    <Icon icon="ic:outline-dashboard" color="black" className="mb-1 ms-3" />  <span className="ms-1 text-black ">Dashboard </span>
                </div> </p> </Link>
               <Link to ="/CreateProfile" onClick={(e) =>handleEdit(e)}> <p className="text-decoration-none a1 active"  > <div className="Createprofile a3 fw-bold p-2 ">
                    <Icon icon="mingcute:user-add-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 text-black">Createprofile</span>
                </div> </p> </Link>
                <Link to ="/Calculator"> <p className="text-decoration-none a1 active"> <div className=" Calculator a3 fw-bold p-2 ">
                    <Icon icon="mingcute:user-add-fill" color="black" className="mb-1 ms-3" /> <span className="ms-1 text-black">Calculator</span>
                </div> </p> </Link>
            </div>
        
    )
}
export default SideBar ;