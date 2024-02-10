import { POST_LOGIN, POST_REGISTER, SEND_MAIL_ADMIN } from "../actions/login";


const initialState = {
    content: null,
    token: "",
    role: "",
    emailSent: null
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGISTER:
            return {
                ...state,
                content: action.payload,
            };
        case POST_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role
            }
        case SEND_MAIL_ADMIN:
            return {
                ...state,
                emailSent: action.payload
            }


        default:
            return state;
    }
};

export default registerReducer;