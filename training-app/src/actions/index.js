import * as CONST from '../constants/ActionTypes'

export const addMessage = message => ({
    type: CONST.ADD_MESSAGE,
    message
});

function fetchMessagePending() {
    return {
        type: CONST.LOAD_MESSAGES_PENDING
    }
}

function fetchMessageSuccess(message) {
    return {
        type: CONST.LOAD_MESSAGES_SUCCESS,
        products: message
    }
}

function fetchMessageError(error) {
    return {
        type: CONST.LOAD_MESSAGES_ERROR,
        error: error
    }
}

export function getMessages() {
    return (dispatch) => {
        dispatch(fetchMessagePending());
        return fetch("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
            .then(response => response.json())
            .then(response => {
                dispatch(fetchMessageSuccess(response.messages))
                return
            })
            .catch(err => dispatch(fetchMessageError(err)));
    }
}

export const login = (username) => {
    return {
        type: CONST.LOGIN,
        username
    }

}