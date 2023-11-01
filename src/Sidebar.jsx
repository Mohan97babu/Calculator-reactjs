import "../src/Css/Login.css";
import { Icon } from '@iconify/react';
const SideBar = () => {
    return (
        <>
            <div className=" cardcolor heights">
                <a href="#" className="text-decoration-none">  <div className="Home fw-bold my-4 mx-3">
                    <Icon icon="ion:home-sharp" color="#7464bc" className="mb-1" /> <span className="ms-1 textcolor1">Home</span>
                </div> </a>
                <a href="#" className="text-decoration-none">  <div className="Dashboard fw-bold my-4 mx-3">
                    <Icon icon="ic:outline-dashboard" color="#7464bc" className="mb-1" />  <span className="ms-1 textcolor1">Dashboard </span>
                </div> </a>
                <a href="#" className="text-decoration-none">   <div className="Createprofile fw-bold my-4 mx-3">
                    <Icon icon="mingcute:user-add-fill" color="#7464bc" className="mb-1" /> <span className="ms-1 textcolor1">Createprofile</span>
                </div> </a>
            </div>
        </>
    )
}
export default SideBar 