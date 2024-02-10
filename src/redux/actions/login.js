export const POST_REGISTER = "POST_REGISTER";
export const POST_LOGIN = "POST_LOGIN";
export const SEND_MAIL_ADMIN = "SEND_MAIL_ADMIN"

export const postRegister = (register) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                body: JSON.stringify(register),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch({
                    type: POST_REGISTER,
                    payload: data,
                });
                alert("Registrazione effettuato con successo!");
            } else {
                throw new Error("The login is fail!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const postLogin = (login) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                body: JSON.stringify(login),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch({
                    type: POST_LOGIN,
                    payload: { token: data.token, role: data.role },
                });
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.role);

                alert("Login effettuato con successo!");
            } else {
                throw new Error("The login is fail!");
            }
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const sendMail = (emailContent) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/users/sendEmailAdmin", {
                method: "POST",
                body: JSON.stringify(emailContent),
                headers: {
                    "Content-Type": "application/json",

                },
            });
            if (res.ok) {

                dispatch({
                    type: SEND_MAIL_ADMIN,
                    payload: emailContent,
                });
            } else {
                throw new Error("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
        }
    };
};