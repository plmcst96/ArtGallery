
export const POST_AVATAR = "POST_AVATAR"
export const GET_PROFILE = "GET_PROFILE"
export const PUT_PROFILE = "PUT_PROFILE"
export const DELETE_PROFILE = "DELETE_PROFILE"

export const getProfile = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/users/me",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_PROFILE,
                    payload: data
                })
                localStorage.setItem("userId", data.uuid)
            } else {
                throw new Error("Error in data recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export const putProfile = (editProfile, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/users/me',
                {
                    method: 'PUT',
                    body: JSON.stringify(editProfile),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (res.ok) {
                const data = await res.json()
                console.log("PUT", data)
                dispatch({
                    type: PUT_PROFILE,
                    payload: data
                })

            } else {
                throw new Error("Errore nell'invio del profilo")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}

export const postAvatar = (uuid, token, avatar) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append('avatar', avatar);

            const res = await fetch(
                'http://localhost:3001/users/' + uuid + '/avatar',
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
                    type: POST_AVATAR,
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

export const removeProfile = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/users/me",
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: DELETE_PROFILE,
                    payload: data.uuid
                })
            } else {
                throw new Error("Errorto remove recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}
