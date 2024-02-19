import { GET_EXHIBITION, GET_SINGLE_EXHIBITION } from "../actions/exhibition"

const initialState = {
    exhibitions: [],
    singleExhibition: null
}

export const exhibitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXHIBITION:
            return {
                ...state,
                exhibitions: action.payload
            }
        case GET_SINGLE_EXHIBITION:
            return {
                ...state,
                singleExhibition: action.payload
            }
        default:
            return state
    }

}
