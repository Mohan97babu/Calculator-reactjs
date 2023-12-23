import axios from "axios"
import { Constants } from "../constants/constants"

export const EditProductList = async (dispatch,id) =>
{
    const baseurl = process.env.REACT_APP_BASEURL_REDUX
    try{
       const {data} = await axios.put(`${baseurl}/products/${id}`);
        dispatch({
            type :Constants.EDITAPI_PRODUCTS,
            payload : {data}
        })
    }
    catch(err){
        console.log(err);
    }
}