import React, {Component} from 'react';
import Chat from '../components/Chat';
import { connect } from 'react-redux';
import getOne from '../service/websocket'


const mapStateToProps = (state) => {

    return {
        message: state.messageList,
        username: state.loginReducer,

    }
};



class ChatContainer extends Component{

    componentDidMount() {
        if (this.props.username.length < 1) {
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <Chat
            message={this.props.message}
            username={this.props.username}
        />
        )
    }
}

export default connect(mapStateToProps)(ChatContainer)