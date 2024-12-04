import React from 'react'
import { Plus, SmilePlus, Mic } from 'lucide-react'
import './UserChatBoxFooter.css'
export default function UserChatBoxFooter() {
    return (
        <div className='UserChatBoxFooter'>
            <div className='plusIcon'>
                <Plus />
            </div>
            <div className='msg'>
                
                <SmilePlus />
                <input type='text' placeholder='Type a message' className='inputbox'/>
                
            </div>
            <div className='mic'>
                <Mic/>
            </div>
        </div>
    )
}
