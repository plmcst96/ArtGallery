export const GET_COMMENTS = "GET_COMMENTS"
export const DELETE_COMMENTS = 'DELETE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const PUT_COMMENT = "PUT_COMMENT"


export const getComments = (idBlog, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/comments/blog/' + idBlog,
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
                    type: GET_COMMENTS,
                    payload: data.content
                })
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
                dispatch({
                    type: DELETE_COMMENTS,
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

export const postComment = (addComment, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(addComment),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: ADD_COMMENT,
                    payload: data
                })

            } else {
                throw new Error("Errore nell'invio del commento")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}

export const putComment = (uuid, addComment, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/comments/' + uuid,
                {
                    method: 'PUT',
                    body: JSON.stringify(addComment),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: PUT_COMMENT,
                    payload: data
                })

            } else {
                throw new Error("Errore nell'invio del commento")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}