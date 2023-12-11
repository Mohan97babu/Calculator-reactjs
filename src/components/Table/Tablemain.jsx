
import TableRows from "./TableRows";
const TableMain =({createProfileData,setCreateProfileData,edit,setEdit})=>
{  
    const deleteRow = (index ) =>
    { 
       
        const dataRow = [...createProfileData];
       dataRow.splice(index,1)
       setCreateProfileData(dataRow)
    }
    return (
        <TableRows
        deleteRow={deleteRow} 
        createProfileData={createProfileData}
        edit={edit}
        setEdit={setEdit}       
        />
    )
}
export default TableMain;