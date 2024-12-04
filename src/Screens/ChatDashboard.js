import React, { useState } from 'react'
import UserChatBox from '../Components/UserChatBox/UserChatBox'
import UserChatList from '../Components/UserChatList/UserChatList'
import UserStatusList from '../Components/UserStatusList/UserStatusList'
import "./ChatDashboard.css"
const ChatDashboard = () => {
  const [selectedOption, setSelectedOption] =useState("chat");
  return (
    <div className='homeContainer'>
        <div className='chatBoxContainer'>
            <UserStatusList selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <UserChatList/>
            <UserChatBox/>
        </div>
    </div>
  )
}

export default ChatDashboard