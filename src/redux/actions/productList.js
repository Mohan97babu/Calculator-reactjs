import axios from "axios";
import {Constants} from "../constants/constants";

export const productList = async (dispatch) =>
{
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
   try{
     const {data} =  await axios.get(`${baseurl}/products/`)
     dispatch({
        type : Constants.GETAPI_PRODUCTS,
        payload : data
     });
     console.log(baseurl,"452");
   }
   catch(error){
    console.log(error);
   }
}