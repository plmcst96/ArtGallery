import { GET_EVENT, GET_SINGLE_EVENT } from "../actions/event"

const initialState = {
    events: [],
    singleEvent: null
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
                events: action.payload
            }
        case GET_SINGLE_EVENT:
            return {
                ...state,
                singleEvent: action.payload
            }
        default:
            return state
    }
}
export default eventReducer