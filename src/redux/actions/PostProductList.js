import axios from "axios";
import { Constants } from "../constants/constants";

export const PostProductList = async (addProducts) =>
{
    console.log(addProducts,"789");
    const baseurl = process.env.REACT_APP_BASEURL_REDUX;
    try{
        console.log(addProducts,"add")
        const response =  await axios.post(`${baseurl}/products`, addProducts);
        
           console.log(response.status,"responsepost"); 
        console.log(addProducts,"add") 
        return {
            type: Constants.POSTAPI_PRODUCTS,
            payload: response.data ,
            };      
    }
    catch(err)
    {
        console.log(err);
        throw err;
    }
}