export const GET_GALLERY = "GET_GALLERY"
export const LOAD_GALLERY_ID = "LOAD_GALLERY_ID"
export const GET_SINGLE_ARTWORK = "GET_SINGLE_ARTWORK"
export const POST_GALLERY = "POST_GALLERY"
export const DELETE_GALLERY = "DELETE_GALLERY"
export const POST_WORK = "POST_WORK"
export const POST_PICTURE_WORK = "POST_PICRURE_WORK"
export const DELETE_WORK = "DELETE_WORK"

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
                localStorage.setItem("galleryId")

            } else {
                throw new Error("Errore nell'invio della galleria")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}

export const deleteGallery = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/gallery/' + uuid,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                dispatch({
                    type: DELETE_GALLERY,
                    payload: uuid
                })
            } else {
                throw new Error('Qualquadra non cosa')
            }
        } catch (error) {
            console.log('errore nella cancellazione del commento', error)
        }
    }
}

export const postWork = (artistWork, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/artist-work',
                {
                    method: 'POST',
                    body: JSON.stringify(artistWork),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_WORK,
                    payload: data
                })
                localStorage.setItem("artwork", data.uuid)

            } else {
                throw new Error("Errore nell'invio della galleria")
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
                'http://localhost:3001/artist-work/' + uuid + '/image',
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
                    type: POST_PICTURE_WORK,
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

export const deleteWork = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/artist-work/' + uuid,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                dispatch({
                    type: DELETE_WORK,
                    payload: uuid
                })
            } else {
                throw new Error('Qualquadra non cosa')
            }
        } catch (error) {
            console.log('errore nella cancellazione del commento', error)
        }
    }
}
