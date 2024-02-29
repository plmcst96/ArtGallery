export const SET_DATE = "SET_DATE"
export const SET_TIME = "SET_TIME"
export const UPDATE_COUNTER = "UPDATE_COUNTER"
export const UPDATE_TOTAL = "UPDATE_TOTAL"
export const POST_ACCOUNT_SESSION = "POST_ACCOUNT_SESSION"
export const POST_ACCOUNT = "POST_ACCOUNT"

export const setDateTicket = (date) => {
    return {
        type: SET_DATE,
        payload: date
    };
};


export const setTimeTicket = (time) => {
    return {
        type: SET_TIME,
        payload: time
    };
};

export const updateCounter = (type, count) => ({
    type: UPDATE_COUNTER,
    payload: { type, count }
});

export const updateTotal = (total) => {
    return {
        type: UPDATE_TOTAL,
        payload: total,
    };
};

export const resetTicketState = () => {
    return { type: 'RESET_TICKET_STATE' };
};

export const postAccountSession = (token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/v1/account_sessions',
                {
                    method: 'POST',

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
                    type: POST_ACCOUNT_SESSION,
                    payload: data
                })


            } else {
                throw new Error("Errore nell'invio dei dati")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }

}
export const postAccount = (email, token) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                'http://localhost:3001/v1/accounts',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(email)
                }
            )

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: POST_ACCOUNT,
                    payload: data
                })


            } else {
                throw new Error("Errore nell'invio dei dati")
            }
        } catch (error) {
            console.log('ERRORE', error)
        }
    }

}