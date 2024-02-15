export const SET_DATE = "SET_DATE"
export const SET_TIME = "SET_TIME"
export const UPDATE_COUNTER = "UPDATE_COUNTER"
export const UPDATE_TOTAL = "UPDATE_TOTAL"

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

export const updateCounter = (count) => ({
    type: UPDATE_COUNTER,
    payload: count
});

export const updateTotal = (total) => {
    return {
        type: 'UPDATE_TOTAL',
        payload: total,
    };
};