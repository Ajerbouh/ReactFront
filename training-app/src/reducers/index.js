import { combineReducers } from 'redux';
import messageList from './messageList';
import messages from './messages';
import loginReducer from './loginReducer'

export default combineReducers({
    messageList,
    messages,
    loginReducer,
})