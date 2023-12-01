
import TableRows from "./TableRows";
const TableMain =({createProfileData,setCreateProfileData,edit,setEdit})=>
{
    
   
   
    const deleteRow = (index ) =>
    {
        
        console.log(index);
        const dataRow = [...createProfileData];
       dataRow.slice(index+1,3)
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