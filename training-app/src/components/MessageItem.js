import React from 'react';
import PropTypes from "prop-types";
import { Twemoji } from 'react-emoji-render';

export default function MessageItem({message}) {
    return (
            <ul>
                <Twemoji text={message.message}/>
            </ul>
    )
}

MessageItem.propTypes = {
    message: PropTypes.shape({
        message: PropTypes.string.isRequired
    })
};