import { ADD_MESSAGE } from "../constants/ActionTypes";


const messageList = (state = [], action) => {

    console.log('action: ', action);
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state,{message: action.message, username: action.username}];
        default:
            return state
    }
};

export default messageList
