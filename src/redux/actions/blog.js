export const GET_ALL_BLOG = "GET_ALL_BLOG"
export const GET_SINGLE_BLOG = "GET_SINGLE_BLOG"

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