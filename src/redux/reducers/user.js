import { DELETE_PROFILE, GET_PROFILE, POST_AVATAR, PUT_PROFILE } from "../actions/user"

const initialState = {
    profile: null,

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case PUT_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case POST_AVATAR:
            return {
                profile: action.payload
            }
        case DELETE_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }

}