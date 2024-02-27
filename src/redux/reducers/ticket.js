import { SET_DATE, SET_TIME, UPDATE_COUNTER, UPDATE_TOTAL } from "../actions/ticket";

const initialState = {
    selectedDate: null,
    selectedTime: null,
    selectedType: {
        standard: 0,
        under7: 0,
        over60: 0,
        student: 0
    },
    total: 0
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
        case UPDATE_COUNTER:
            return {
                ...state,
                selectedType: {
                    ...state.selectedType,
                    [action.payload.type]: action.payload.count
                }
            };
        case UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        case 'RESET_TICKET_STATE':
            return initialState;
        default:
            return state;
    }
};

export default ticketReducer;