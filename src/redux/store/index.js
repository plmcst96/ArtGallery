import { combineReducers, configureStore } from "@reduxjs/toolkit"
import artistReducer from "../reducers/artist"
import registerReducer from "../reducers/login"
import eventReducer from "../reducers/event"
import galleryReducer from "../reducers/artistWork"

const bigReducer = combineReducers({
    artist: artistReducer,
    register: registerReducer,
    event: eventReducer,
    gallery: galleryReducer
})

const store = configureStore({
    reducer: bigReducer,
})

export default store