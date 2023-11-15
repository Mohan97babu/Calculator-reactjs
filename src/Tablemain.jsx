
import TableRows from "./TableRows";
const TableMain =({createProfileData,setCreateProfileData,edit,setEdit})=>
{
    
    // const [profile,setProfile] = useState([]);
    // const addRow =() =>
    // {

    // }
   
    const deleteRow = (index ) =>
    {
        const dataRow = [...createProfileData];
       dataRow.splice(index+1,1)
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