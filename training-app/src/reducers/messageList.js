import { ADD_MESSAGE } from "../constants/ActionTypes";


const messageList = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state,{message: action.message}];
        default:
            return state
    }
};

export default messageList
