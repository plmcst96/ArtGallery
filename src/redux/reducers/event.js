import { GET_EVENT } from "../actions/event"

const initialState = {
    events: []
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state
    }
}
export default eventReducer