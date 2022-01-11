import { combineReducers } from "redux";
import auth from './authReducer';
import loader from './loaderReducer';
import products from './product';
 
export default combineReducers({
    auth, loader, products
})