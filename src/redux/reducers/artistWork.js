import { DELETE_WORK, GET_GALLERY, GET_SINGLE_ARTWORK, LOAD_GALLERY_ID, POST_GALLERY, POST_PICTURE_WORK, POST_WORK } from "../actions/artistWork"

const initialState = {
    gallery: [],
    galleryId: null,
    singleArtwork: null,
    postGallery: null,
    postWork: null
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
        case POST_WORK:
            return {
                ...state,
                postWork: action.payload
            }
        case POST_PICTURE_WORK:
            return {
                ...state,
                singleArtwork: action.payload
            }
        case DELETE_WORK:
            return {
                ...state,
                gallery: state.gallery.filter(work => work.uuid !== action.payload)
            }
        default:
            return state
    }
}
export default galleryReducer