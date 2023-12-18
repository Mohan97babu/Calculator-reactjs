import {Constants} from "../constants/constants";

const initialValues ={
    productList :[],
    singleProduct :[],
};
export const productListReducer = (state = initialValues ,{type,payload}) =>
{
   switch(type)
   {
    case Constants.GETAPI_PRODUCTS:
    return {...state , productList : payload}

    case Constants.GETAPI_PRODUCTS_SINGLE:
    return {...state , singleProduct : payload}

    default:
        return state;
   }
};