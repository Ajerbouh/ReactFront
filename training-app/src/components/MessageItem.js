import React from 'react';
import PropTypes from "prop-types";
import {Twemoji} from 'react-emoji-render';

export default function MessageItem({message}) {
    return (
        <ul>
            <p>
                <Twemoji text={(message.username || '').toString()}/>
            </p>
            <p>
                <Twemoji text={(message.message || '').toString()}/>
            </p>
        </ul>
    )
}