import axios from "axios";
import {Constants} from "../constants/constants";

export const singleProduct = async (dispatch) =>
{
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
   try{
     const {singleData} = await axios.get(`${baseurl}/products/1`);
     dispatch({
        type : Constants.GETAPI_PRODUCTS_SINGLE,
        payload : singleData,
     });
    
   }
   catch(error){
     console.log(error);
   }
}
