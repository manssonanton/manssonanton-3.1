import React from 'react';

interface MessageProps {
    msg: string;
    type: 'danger' | 'success' | 'info';
}

function Message({ msg, type }: MessageProps) {
    let typeClass = '';

    if (type === 'danger') {
        typeClass = 'is-danger';
    }

    if (type === 'success') {
        typeClass = 'is-success';
    }
    if (type === 'info') {
        typeClass = 'is-info';
    }

    return (
        <article className={`message ${typeClass}`}>
            <div className="message-body">{msg}</div>
        </article>
    )
}

export default Message;