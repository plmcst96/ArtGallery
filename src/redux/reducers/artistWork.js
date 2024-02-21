import { GET_GALLERY, GET_SINGLE_ARTWORK, LOAD_GALLERY_ID, POST_GALLERY } from "../actions/artistWork"

const initialState = {
    gallery: [],
    galleryId: null,
    singleArtwork: null,
    postGallery: null
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GALLERY:
            return {
                ...state,
                gallery: action.payload
            }
        case LOAD_GALLERY_ID:
            return {
                ...state,
                galleryId: action.payload
            }
        case GET_SINGLE_ARTWORK:
            return {
                ...state,
                singleArtwork: action.payload
            }
        case POST_GALLERY:
            return {
                ...state,
                postGallery: action.payload
            }
        default:
            return state
    }
}
export default galleryReducer