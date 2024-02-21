export const GET_GALLERY = "GET_GALLERY"
export const LOAD_GALLERY_ID = "LOAD_GALLERY_ID"
export const GET_SINGLE_ARTWORK = "GET_SINGLE_ARTWORK"
export const POST_GALLERY = "POST_GALLERY"

export const getGallery = (token, galleryId) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/artist-work/artist/groupByYear/" + galleryId.uuid, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_GALLERY,
                    payload: data.content
                })
            } else {
                throw new Error("Error in data recovery")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export const loadGalleryId = (token, artistId) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/gallery/artist/" + artistId, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const galleryUuid = await response.json()
                console.log(galleryUuid)
                dispatch({
                    type: LOAD_GALLERY_ID,
                    payload: galleryUuid
                })
            } else {
                throw new Error("Error in data recovery")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export const getSingleArtwork = (token, artworkId) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/artist-work/" + artworkId, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_SINGLE_ARTWORK,
                    payload: data
                })
            } else {
                throw new Error("Error in data recovery")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export const postGallery = (artistUuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/gallery',
                {
                    method: 'POST',
                    body: JSON.stringify(artistUuid),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_GALLERY,
                    payload: data
                })

            } else {
                throw new Error("Errore nell'invio della galleria")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}