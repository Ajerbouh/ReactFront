import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';


class Chat extends Component {

    render() {
        return (

            <div>
                <MessageList
                    messages={this.props.message}
                    username={this.props.username}
                />
                <MessageBar username={this.props.username}/>
            </div>
        );
    }
}

export default Chat
