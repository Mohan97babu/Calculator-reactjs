
import axios from "axios"
const DeleteProduct = async (deleteId) =>
{
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
    try{
       await axios.delete(`${baseurl}/products/${deleteId}`);
    }
    catch(err){
        console.log(err)
    }
}
export default DeleteProduct;