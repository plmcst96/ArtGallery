import { ADD_COMMENT, DELETE_COMMENTS, GET_COMMENTS } from "../actions/comment"

const initialState = {
    comments: [],
    addComment: null
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                addComment: action.payload
            }
        case DELETE_COMMENTS:
            return {
                ...state,
                comments: state.comments.filter(comm => comm.uuid !== action.payload)

            }
        default:
            return state
    }
}
export default commentReducer