import React from 'react'
import './UserChatListHeader.css'
import {MessageSquarePlus, EllipsisVertical} from 'lucide-react'
export default function UserChatListHeader() {
  return (
    <div className='UserChatListHeaderContainer'>
        <div className='text'>Chats</div>
        <div className='icons'>
            <MessageSquarePlus/>
            <EllipsisVertical/>
        </div>
        
    </div>
  )
}
