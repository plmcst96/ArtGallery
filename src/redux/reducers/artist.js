import { GET_ARTIST } from "../actions/artist"

const initialState = {
    artists: []
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTIST:
            return {
                ...state,
                artists: action.payload
            }
        default:
            return state
    }
}
export default artistReducer