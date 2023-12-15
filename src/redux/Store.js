import { compose, applyMiddleware , legacy_createStore as createStore} from "redux";
import { thunk } from "redux-thunk";
import reducers from "../redux/reducers/index";

let initialValues ={}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,initialValues,composeEnhancers(applyMiddleware(thunk))
);
export default store;