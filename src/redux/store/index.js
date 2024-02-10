import { combineReducers, configureStore } from "@reduxjs/toolkit"
import artistReducer from "../reducers/artist"
import registerReducer from "../reducers/login"

const bigReducer = combineReducers({
    artist: artistReducer,
    register: registerReducer
})

const store = configureStore({
    reducer: bigReducer,
})

export default store