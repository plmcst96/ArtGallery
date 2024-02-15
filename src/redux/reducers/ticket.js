import { SET_DATE, SET_TIME } from "../actions/ticket";

const initialState = {
    selectedDate: null,
    selectedTime: null
};

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                selectedDate: action.payload
            };
        case SET_TIME:
            return {
                ...state,
                selectedTime: action.payload
            }
        default:
            return state;
    }
};

export default ticketReducer;