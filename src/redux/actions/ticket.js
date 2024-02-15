export const SET_DATE = "SET_DATE"
export const SET_TIME = "SET_TIME"

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