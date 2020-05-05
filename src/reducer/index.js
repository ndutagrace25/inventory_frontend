import {
    combineReducers
} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import supplierReducer from './supplierReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    suppliers: supplierReducer
})