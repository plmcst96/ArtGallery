export const GET_EXHIBITION = "GET_EXHIBITION"
export const GET_SINGLE_EXHIBITION = "GET_SINGLE_EXHIBITION"
export const POST_EXHIBITION = "POST_EXHIBITION"

export const getExhibition = (token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/exhibitions/all',
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
                    type: GET_EXHIBITION,
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

export const getSingleExhibition = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/exhibitions/' + uuid,
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
                    type: GET_SINGLE_EXHIBITION,
                    payload: data
                })
                localStorage.setItem("exData", JSON.stringify(data))
            } else {
                throw new Error('Errore nel recupero delle mostre')
            }
        } catch (error) {
            console.log('Errore nel recupero delle mostre', error)
        }
    }
}

export const postExhibition = (exhibition, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/exhibitions',
                {
                    method: 'POST',
                    body: JSON.stringify(exhibition),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_EXHIBITION,
                    payload: data
                })


            } else {
                throw new Error("Errore nell'invio della mostra")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}