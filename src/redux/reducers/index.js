import { combineReducers } from "redux";
import { productListReducer } from "../reducers/productListReducer";


const reducers = combineReducers({
    
    productListData : productListReducer
});

export default reducers;