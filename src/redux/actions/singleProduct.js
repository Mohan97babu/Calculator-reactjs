import axios from "axios";
import {Constants} from "../constants/constants";

export const singleProduct = async (dispatch,id) =>
{
  console.log(id,"idsingle");
   
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
   try{
     const data = await axios.get(`${baseurl}/products/${id}`);
     console.log(data,"action");
     dispatch({
        type : Constants.GETAPI_PRODUCTS_SINGLE,
        payload : {data},
     });
     
   }
   catch(error){
     console.log(error);
   }
}
