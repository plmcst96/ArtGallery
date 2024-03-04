const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

export const addNotification = (notification) => {
    return {
        type: ADD_NOTIFICATION,
        payload: {
            ...notification,
            id: uuidv4() // Genera un ID univoco per la notifica
        }
    };
};

export const removeNotification = (notificationId) => {
    return {
        type: REMOVE_NOTIFICATION,
        payload: {
            id: notificationId
        }
    };
};