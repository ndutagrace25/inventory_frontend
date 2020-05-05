import {
    FETCH_SUPPLIERS,
    CREATE_SUPPLIER
} from '../actions/types';

const initialState = {
    suppliers: [],
    createSupplier: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload
            }
            case CREATE_SUPPLIER:
                return {
                    ...state,
                    createSupplier: action.payload
                }
                default:
                    return state;
    }
}