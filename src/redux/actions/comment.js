export const GET_COMMENTS = "GET_COMMENTS"
export const DELETE_COMMENTS = 'DELETE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'


export const getComments = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/comments/' + uuid,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                const commentsForBlog = data.filter(
                    (comment) => comment.elementId === uuid
                )
                dispatch({ type: GET_COMMENTS, payload: commentsForBlog })
            } else {
                throw new Error('Errore nel recupero dei commenti')
            }
        } catch (error) {
            console.log('Errore nel recupero dei commenti', error)
        }
    }
}

export const deleteComments = (uuid, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/comments/' + uuid,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (res.ok) {
                dispatch(getComments())
            } else {
                throw new Error('Qualquadra non cosa')
            }
        } catch (error) {
            console.log('errore nella cancellazione del commento', error)
        }
    }
}

export const addComment = (token) => {
    return async (dispatch, content) => {
        try {
            const res = await fetch(
                'http://localhost:3001/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(content),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                dispatch({ type: ADD_COMMENT, payload: data })
                dispatch(getComments())
            } else {
                throw new Error("Errore nell'invio del commento")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}