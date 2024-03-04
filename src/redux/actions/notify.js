const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';


export const addNotification = (notification) => {
    localStorage.setItem("notify", JSON.stringify(notification))
    return {
        type: ADD_NOTIFICATION,
        payload: notification

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