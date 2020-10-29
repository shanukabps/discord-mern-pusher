import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import InfoIcon from '@material-ui/icons/Info';


function ChatHeader({ channelName }) {
    // console.log(channelName)
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsIcon />
                <LocationOnIcon />
                <PeopleAltIcon />
                <div className="chatHeader_search">
                    <input type="text" name="" id="" placeholder="search" />
                    <SearchIcon />
                </div>
                <SendIcon />
                <InfoIcon />
            </div>

        </div>

    )
}

export default ChatHeader
