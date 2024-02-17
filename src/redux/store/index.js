import { combineReducers, configureStore } from "@reduxjs/toolkit"
import artistReducer from "../reducers/artist"
import registerReducer from "../reducers/login"
import eventReducer from "../reducers/event"
import galleryReducer from "../reducers/artistWork"
import blogReducer from "../reducers/blog"
import ticketReducer from "../reducers/ticket"
import checkoutReducer from "../reducers/checkout"
import commentReducer from "../reducers/comment"
import { profileReducer } from "../reducers/user"

const bigReducer = combineReducers({
    artist: artistReducer,
    register: registerReducer,
    event: eventReducer,
    gallery: galleryReducer,
    blog: blogReducer,
    ticket: ticketReducer,
    checkout: checkoutReducer,
    comment: commentReducer,
    profile: profileReducer
})

const store = configureStore({
    reducer: bigReducer,
})

export default store