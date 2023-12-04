import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const TableRows =({deleteRow,createProfileData,setEdit}) =>
{
    return createProfileData?.map ((item,index) =>
    {
        index=index+1;
        return (
            <tr className="  cardcolor ">
            <td>{index}</td>
            <td>{item.email}</td>
            <td>{item.firstName}</td>
            <td>{item.mobile}</td>           
            <td>
                <div className="row d-flex  pe-3  ">
                 <Link to="/create-profile" className="w-25" onClick={()=>setEdit({check:true,index:index})} >  <Icon icon="uil:edit" color="#7464bc" width="20" height="20"  /> </Link>
                    <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" className="w-25" onClick={() =>deleteRow()}/>
                    <Icon icon="carbon:view" color="#7464bc" width="20" height="20" className="w-25" />
                </div>
            </td>
        </tr>
        )
    })
}
export default TableRows;