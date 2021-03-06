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

const styles = {
    center: {
        marginLeft: "auto",
        marginRight: "auto"
    }
}

class ChatContainer extends Component{

    componentDidMount() {
        if (this.props.username.length < 1) {
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <div className={styles.center}>
            <Chat
            message={this.props.message}
            username={this.props.username}
        />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ChatContainer)