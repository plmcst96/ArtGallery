import { GET_ARTIST, SINGLE_ARTIST } from "../actions/artist"

const initialState = {
    artists: [],
    singleArtist: null
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTIST:
            return {
                ...state,
                artists: action.payload
            }
        case SINGLE_ARTIST:
            return {
                ...state,
                singleArtist: action.payload
            }
        default:
            return state
    }
}
export default artistReducer