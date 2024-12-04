import React from 'react'
import './UserChatBoxHeader.css'
import { Video, EllipsisVertical, Search } from 'lucide-react'
import UserAvatar from '../../UserAvatar/UserAvatar'
export default function UserChatBoxHeader() {
    return (
        <div className='UserChatBoxHeader'>
            <div className='left'>
                <div className='profile'>
                    <UserAvatar />
                </div><div className='userName'>
                    UserName</div>
            </div>
            <div className='right'>
                <div className='icons'>
                    <Video /></div>
                <div className='icons'>
                    <Search />
                </div>
                <div className='icons'>
                    <EllipsisVertical /></div>
            </div>
        </div>
    )
}
