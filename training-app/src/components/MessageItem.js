import React from 'react';
import {Twemoji} from 'react-emoji-render';
import {Toast} from "react-bootstrap"

export default function MessageItem({message}) {
    return (
        <Toast>
            <Toast.Header>
                <strong className="mr-auto"><Twemoji text={(message.username || '').toString()}/></strong>
            </Toast.Header>
            <Toast.Body>
                <Twemoji text={(message.message || '').toString()}/>
            </Toast.Body>
        </Toast>

    )
}