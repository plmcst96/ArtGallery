import { GET_LOCATION, GET_LOCATION_EXHIBITION } from "../actions/location"

const initialState = {
    locationExhibition: null,
    locations: []
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
        default:
            return state
    }
}