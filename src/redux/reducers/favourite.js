import { ADD_TO_FAVOURITE, REMOVE_FAV_COM } from "../actions/favourite"

const initialState = {

    content: []

}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {

                ...state,
                content: [...state.content, action.payload]

            }
        case REMOVE_FAV_COM:
            return {

                ...state,
                content: state.content.filter((data) => data._id !== action.payload)
            }

        default:
            return state
    }

}


export default favReducer