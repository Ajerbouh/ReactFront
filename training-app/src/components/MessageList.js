import React, {Component} from 'react';
import MessageItem from './MessageItem';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.messages.length < 1) {
            return <p>Pas de messages !</p>
        }
        return (
            <div>
                {

                    this.props.messages.map((message, key) =>
                        <MessageItem
                            message={message}
                            username={this.props.username}
                            key={key}
                        />
                    )
                }
            </div>
        )
    }
}


