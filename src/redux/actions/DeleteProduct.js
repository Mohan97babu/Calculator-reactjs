import { Constants } from "../constants/constants";
import axios from "axios"
const DeleteProduct = async (dispatch,deleteId) =>
{
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
    try{
       await axios.delete(`${baseurl}/products/${deleteId}`);
       dispatch({
          type : Constants.DELETEAPI_PRODUCTS,
          payload : deleteId
       })
    }
    catch(err){
        console.log(err)
    }
}
export default DeleteProduct;