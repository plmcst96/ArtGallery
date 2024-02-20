export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FAV_COM = "REMOVE_FAV_COM"

export const addFavouriteAction = (data) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: data,
    }
}

export const removeFavAction = (data) => {
    return {
        type: REMOVE_FAV_COM,
        payload: data,
    }
}