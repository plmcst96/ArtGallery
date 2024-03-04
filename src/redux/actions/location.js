export const GET_LOCATION_EXHIBITION = "GET_LOCATION_EXHIBITION"
export const GET_LOCATION = "GET_LOCATION"
export const POST_LOCATION = "POST_LOCATION"
export const GET_LOCATION_USER = "GET_LOCATION_USER"
export const DELETE_LOCATION_USER = "DELETE_LOCATION_USER"

export const getLocationByExhibition = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/locations/exhibition/' + uuid,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: GET_LOCATION_EXHIBITION,
                    payload: data
                })
            } else {
                throw new Error('Errore nel recupero delle mostre')
            }
        } catch (error) {
            console.log('Errore nel recupero delle mostre', error)
        }
    }
}

export const getLocationByUser = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/locations/user/' + uuid,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: GET_LOCATION_USER,
                    payload: data
                })
            } else {
                throw new Error('Errore nel recupero delle location')
            }
        } catch (error) {
            console.log('Errore nel recupero delle location', error)
        }
    }
}

export const getLocations = (token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/locations',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: GET_LOCATION,
                    payload: data.content
                })
            } else {
                throw new Error('Errore nel recupero delle mostre')
            }
        } catch (error) {
            console.log('Errore nel recupero delle mostre', error)
        }
    }
}

export const postLocation = (addLocation, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/locations/user',
                {
                    method: 'POST',
                    body: JSON.stringify(addLocation),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_LOCATION,
                    payload: data
                })
                localStorage.setItem("locationId", data.uuid)

            } else {
                throw new Error("Errore nell'invio della location")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}


export const removeLocation = (uuid, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/locations/user/" + uuid,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {

                dispatch({
                    type: DELETE_LOCATION_USER,
                    payload: uuid
                })
            } else {
                throw new Error("Errorto remove recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}