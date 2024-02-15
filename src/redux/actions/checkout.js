export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

export const postCheckout = (details, token) => async (dispatch) => {
    dispatch({ type: CHECKOUT_REQUEST });

    try {
        // Esegui la richiesta API per il checkout con i dettagli forniti
        const response = await fetch('http://localhost:3001/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(details) // Dettagli del checkout da inviare al backend
        });
        const data = await response.json();

        dispatch({ type: CHECKOUT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CHECKOUT_FAILURE, payload: error.message });
    }
};