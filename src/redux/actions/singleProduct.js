import axios from "axios";
import {Constants} from "../constants/constants";

export const singleProduct = async (dispatch,params) =>
{  
  
   
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
   try{
     const data = await axios.get(`${baseurl}/products/${params.id}`);
     console.log(data,"action");
     dispatch({
        type : Constants.GETAPI_PRODUCTS_SINGLE,
        payload : {data},
     });
     console.log(data,"data");
   }
   catch(error){
     console.log(error);
   }
}
