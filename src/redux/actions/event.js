export const GET_EVENT = "GET_EVENT"

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