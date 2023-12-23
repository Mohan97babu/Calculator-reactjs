import axios from "axios";
import { Constants } from "../constants/constants";

export const PostProductList = async (dispatch,addProducts) =>
{
    console.log(addProducts,"789")
    
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
    try{
         await axios.post(`${baseurl}/products`,{addProducts});
       // console.log(data,"123");
        dispatch({
           type : Constants.POSTAPI_PRODUCTS,
           payload : {addProducts}
        })
       // console.log(data,"789");
    }
    catch(err)
    {
        console.log(err);
    }
}