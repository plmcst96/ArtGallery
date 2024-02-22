export const GET_ARTIST = "GET_ARTIST"
export const SINGLE_ARTIST = "SINGLE_ARTIST"
export const REMOVE_ARTIST = "REMOVE_ARTIST"
export const POST_NEW_ARTIST = "POST_NEW_ARTIST"
export const POST_PICTURE = "POST_PICTURE"

export const getAlArtist = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/artists",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_ARTIST,
                    payload: data.content
                })
            } else {
                throw new Error("Error in data recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export const getSingleArtist = (uuid, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/artists/" + uuid,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: SINGLE_ARTIST,
                    payload: data
                })
            } else {
                throw new Error("Error in data recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export const postArtist = (addArtist, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/artists',
                {
                    method: 'POST',
                    body: JSON.stringify(addArtist),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_NEW_ARTIST,
                    payload: data
                })
                localStorage.setItem("artistId", data.uuid)

            } else {
                throw new Error("Errore nell'invio dell'artista")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}

export const postPicture = (uuid, token, image) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const res = await fetch(
                'http://localhost:3001/artists/' + uuid + '/image',
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_PICTURE,
                    payload: data
                })


            } else {
                throw new Error("Errore nell'invio dell'artista")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}

export const removeArtist = (uuid, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/artists/" + uuid,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {

                dispatch({
                    type: REMOVE_ARTIST,
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