export const GET_PROFILE = "GET_PROFILE"

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
            } else {
                throw new Error("Error in data recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}