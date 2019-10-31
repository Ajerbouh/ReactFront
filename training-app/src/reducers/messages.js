import * as CONST from '../constants/ActionTypes';

const initialState = {
    pending: false,
    messages: [],
    error: null
};

const messages = (state = initialState, action) =>  {
    switch (action.type) {
        case CONST.LOAD_MESSAGES_PENDING:
            return {
                ...state,
                pending: true
            };
        case CONST.LOAD_MESSAGES_SUCCESS:
            return {
                ...state,
                pending: false,
                messages: action.message
            };
        case CONST.LOAD_MESSAGES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
};

export default messages