import React from 'react'
import './UserChatList.css'
import UserChatListHeader from './UserChatListHeader/UserChatListHeader'
import UserChatListSearchBar from './UserChatListSearchBar/UserChatListSearchBar'
import UserChatListArchive from './UserChatListArchive/UserChatListArchive'

function UserChatList() {
  return (
    <div className='UserChatListContainer'>
      <UserChatListHeader/>
      <UserChatListSearchBar/>
      <UserChatListArchive/>
      </div>
  )
}

export default UserChatList