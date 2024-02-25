

export const GET_ALL_BLOG = "GET_ALL_BLOG"
export const GET_SINGLE_BLOG = "GET_SINGLE_BLOG"
export const POST_BLOG = "POST_BLOG"
export const DELETE_BLOG = "DELETE_BLOG"
export const POST_PICTURE_BLOG = "POST_PICTURE_BLOG"
export const PUT_BLOG = "PUT_BLOG"

export const getAllBlog = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/blogs",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_ALL_BLOG,
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

export const getSingleBlog = (uuid, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/blogs/" + uuid,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_SINGLE_BLOG,
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

export const postBlog = (blog, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/blogs',
                {
                    method: 'POST',
                    body: JSON.stringify(blog),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )


            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: POST_BLOG,
                    payload: data
                })
                localStorage.setItem("blog", data.uuid)

            } else {
                throw new Error("Errore nell'invio del blog")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }

}

export const postPictureBlog = (uuid, token, image) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const res = await fetch(
                'http://localhost:3001/blogs/' + uuid + '/image',
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
                    type: POST_PICTURE_BLOG,
                    payload: data
                })


            } else {
                throw new Error("Errore nell'invio del blog")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}

export const removeBlog = (uuid, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/blogs/" + uuid,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {

                dispatch({
                    type: DELETE_BLOG,
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

export const putBlog = (uuid, addBlog, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/blogs/' + uuid,
                {
                    method: 'PUT',
                    body: JSON.stringify(addBlog),
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
                    type: PUT_BLOG,
                    payload: data
                })

            } else {
                throw new Error("Errore nell'invio del blog")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}
