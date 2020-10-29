import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from 'react-redux';
import { setChannelInfor } from './features/appSlice';





function SidebarChannel({ id, channelName }) {

    const dispatch = useDispatch();

    return (

        <div className="sidebarChannel" onClick={() =>
            dispatch(setChannelInfor({
                channelId: id,
                channelName: channelName
            }))}>
            <h4>
                <span className="sidebarChannel_hash">#</span>{channelName}
            </h4>
        </div>

    )
}

export default SidebarChannel
