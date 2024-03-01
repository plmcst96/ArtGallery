export const GET_EVENT = "GET_EVENT"
export const GET_SINGLE_EVENT = "GET_SINGLE_EVENT"

export const getAllEvents = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/events",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_EVENT,
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

export const getSingleEvent = (uuid, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/events/" + uuid,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_SINGLE_EVENT,
                    payload: data
                })
                localStorage.setItem("evetData", JSON.stringify(data))
            } else {
                throw new Error("Error in data recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}