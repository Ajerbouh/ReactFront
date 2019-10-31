import * as CONST from '../constants/ActionTypes'

const loginReducer = (state = [], action) => {
    switch (action.type) {
        case CONST.LOGIN:
            return (
                {
                    username: action.username
                }
            );
        default:
            return state
    }
}

export default loginReducer