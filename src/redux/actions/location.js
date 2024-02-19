export const GET_LOCATION_EXHIBITION = "GET_LOCATION_EXHIBITION"
export const GET_LOCATION = "GET_LOCATION"

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