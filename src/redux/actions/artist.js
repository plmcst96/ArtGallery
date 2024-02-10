export const GET_ARTIST = "GET_ARTIST"

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