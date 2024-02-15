import { CHECKOUT_FAILURE, CHECKOUT_REQUEST, CHECKOUT_SUCCESS } from "../actions/checkout";

const initialState = {
    loading: false,
    error: null,
    success: false
};

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case CHECKOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default checkoutReducer;