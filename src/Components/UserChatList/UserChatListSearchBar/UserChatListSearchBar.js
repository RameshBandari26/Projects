import React from 'react'
import './UserChatListSearchBar.css'
import {Search} from 'lucide-react'
export default function UserChatListSearchBar() {
  return (
    <div className='UserChatListSearchBar'>
        <div className='search'><Search className='searchIcon'/>
        <input type='text' placeholder='Search' />
        </div>
    </div>
  )
}
