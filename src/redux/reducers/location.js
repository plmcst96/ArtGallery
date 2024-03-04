import { DELETE_LOCATION_USER, GET_LOCATION, GET_LOCATION_EXHIBITION, GET_LOCATION_USER, POST_LOCATION } from "../actions/location"

const initialState = {
    locationExhibition: null,
    locations: [],
    addLocation: null,
    locationUser: null
}

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATION_EXHIBITION:
            return {
                ...state,
                locationExhibition: action.payload
            }
        case GET_LOCATION:
            return {
                ...state,
                locations: action.payload
            }
        case POST_LOCATION:
            return {
                addLocation: action.payload
            }
        case GET_LOCATION_USER:
            return {
                locationUser: action.payload
            }
        case DELETE_LOCATION_USER:
            return {
                locationUser: action.payload
            }
        default:
            return state
    }
}