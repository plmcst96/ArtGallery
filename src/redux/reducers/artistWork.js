import { GET_GALLERY, LOAD_GALLERY_ID } from "../actions/artistWork"

const initialState = {
    gallery: [],
    galleryId: null
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
        default:
            return state
    }
}
export default galleryReducer