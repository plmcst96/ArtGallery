import { combineReducers, configureStore } from "@reduxjs/toolkit"
import artistReducer from "../reducers/artist"
import registerReducer from "../reducers/login"
import eventReducer from "../reducers/event"

const bigReducer = combineReducers({
    artist: artistReducer,
    register: registerReducer,
    event: eventReducer
})

const store = configureStore({
    reducer: bigReducer,
})

export default store