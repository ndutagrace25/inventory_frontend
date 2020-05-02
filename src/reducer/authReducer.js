import {
    SET_CURRENT_USER,
    RESET_PASSWORD
} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    passwordReset: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                    user: action.payload
            }
            case RESET_PASSWORD:
                return {
                    ...state,
                    passwordReset: action.payload
                }
                default:
                    return state;
    }
}