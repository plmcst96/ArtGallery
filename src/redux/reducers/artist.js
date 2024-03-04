import { GET_ARTIST, POST_NEW_ARTIST, POST_PICTURE, REMOVE_ARTIST, SINGLE_ARTIST } from "../actions/artist"


const initialState = {
    artists: [],
    singleArtist: null,
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
        case POST_NEW_ARTIST:
            return {
                ...state,
                artists: [...state.artists, action.payload] // Aggiunge il nuovo artista alla lista esistente
            };
        case POST_PICTURE:
            return {
                ...state,
                singleArtist: action.payload
            }
        case REMOVE_ARTIST:
            return {
                ...state,
                artists: state.artists.filter(art => art.uuid !== action.payload)
            }
        default:
            return state
    }
}
export default artistReducer