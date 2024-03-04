import { DELETE_BLOG, GET_ALL_BLOG, GET_SINGLE_BLOG, POST_BLOG, POST_PICTURE_BLOG, PUT_BLOG } from "../actions/blog"

const initialState = {
    blogs: [],
    singleBlog: null,
    addBlog: null
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
        case POST_BLOG:
            return {
                ...state,
                addBlog: action.payload
            }
        case POST_PICTURE_BLOG:
            return {
                ...state,
                singleBlog: action.payload
            }

        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.uuid !== action.payload)
            }
        case PUT_BLOG:
            return {
                ...state,
                addBlog: action.payload
            }
        default:
            return state
    }
}
export default blogReducer