import React, {Component} from 'react';
import MessageItem from './MessageItem';

export default class MessageList extends Component {

    render() {
        if (this.props.messages.length < 1){
            return <p>Pas de messages !</p>
        }
        return (
            <div>
                {
                    this.props.messages.map((message, key) =>
                    <ul>
                        <li key={key}>
                        <MessageItem message={message}/>
                        </li>
                    </ul>
                )
                }
            </div>
        )
    }
}


