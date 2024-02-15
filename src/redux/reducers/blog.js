import { GET_ALL_BLOG, GET_SINGLE_BLOG } from "../actions/blog"

const initialState = {
    blogs: [],
    singleBlog: null,
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOG:
            return {
                ...state,
                blogs: action.payload
            }
        case GET_SINGLE_BLOG:
            return {
                ...state,
                singleBlog: action.payload
            }
        default:
            return state
    }
}
export default blogReducer