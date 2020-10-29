import React from 'react'
import { Avatar } from '@material-ui/core';
import './Message.css'
function Message({ timestamp, messages, user }) {

    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="message_infor">
                <h4>{user.displayName}
                    <span className="message_time">
                        {new Date(parseInt(timestamp)).toDateString()}
                        {/* {new Date(timestamp?.toDate()).toUTCString()} */}
                    </span>
                </h4>
                <p>{messages}</p>
            </div>
        </div>
    )
}

export default Message
