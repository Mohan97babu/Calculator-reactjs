import {Constants} from "../constants/constants"
const initialvalues ={
    productList :[],
}
export const productListReducer =(state =initialvalues ,{type,payload}) =>
{
   switch(type)
   {
    case Constants.GETAPI_PRODUCTS:
    return {...state , productList:payload}

    default:
        return state;
   }
};