import { GET_PROFILE } from "../actions/user"

const initialState = {
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }

}