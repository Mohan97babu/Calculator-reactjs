import {Constants} from "../constants/constants";

const initialValues ={
    productList :[],
    singleProduct :[],
    postData : [],
    editData :[]
};
export const productListReducer = (state = initialValues ,{type,payload}) =>
{
   
   switch(type)
   {
    case Constants.GETAPI_PRODUCTS:
    return {...state , productList : payload}
   
    case Constants.GETAPI_PRODUCTS_SINGLE:
    return {...state , singleProduct : payload}

    case Constants.POSTAPI_PRODUCTS :
        return{ ...state,
             payload : payload
             }

    case Constants.EDITAPI_PRODUCTS :
        return {...state,productList :[...state.productList,payload.data],editData : payload}

    case Constants.DELETEAPI_PRODUCTS :
        return {...state}

    default:
        return state;
   }
  
};