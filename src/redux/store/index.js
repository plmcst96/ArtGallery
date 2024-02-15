import { combineReducers, configureStore } from "@reduxjs/toolkit"
import artistReducer from "../reducers/artist"
import registerReducer from "../reducers/login"
import eventReducer from "../reducers/event"
import galleryReducer from "../reducers/artistWork"
import blogReducer from "../reducers/blog"
import ticketReducer from "../reducers/ticket"

const bigReducer = combineReducers({
    artist: artistReducer,
    register: registerReducer,
    event: eventReducer,
    gallery: galleryReducer,
    blog: blogReducer,
    ticket: ticketReducer
})

const store = configureStore({
    reducer: bigReducer,
})

export default store