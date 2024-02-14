export const GET_GALLERY = "GET_GALLERY"
export const LOAD_GALLERY_ID = "LOAD_GALLERY_ID"

export const getGallery = (token, galleryId) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/artis-work/artist/groupByYear/" + galleryId.uuid, {
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