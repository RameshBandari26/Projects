import React from 'react'
import './UserChatBox.css'
import UserChatBoxHeader from './UserChatBoxHeader/UserChatBoxHeader'
import UserChatBoxFooter from './UserChatBoxFooter/UserChatBoxFooter'
import UserChatBoxMain from './UserChatBoxMain/UserChatBoxMain'
const UserChatBox = () => {
  return (
    <div className='UserChatBoxContainer'>
      <UserChatBoxHeader/>
      <UserChatBoxMain/>
      <UserChatBoxFooter/>
    </div>
  )
}

export default UserChatBox