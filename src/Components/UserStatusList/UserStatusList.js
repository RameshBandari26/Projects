import React from 'react'
import "./UserStatusList.css"
import { CircleFadingPlus, CirclePlus, MessageSquareText, Settings, Users } from "lucide-react";
import UserAvatar from '../UserAvatar/UserAvatar';
const UserStatusList = ({selectedOption, setSelectedOption}) => {
    return (
        <div className="userStatusListContainer">
            <div className="statusTopList">
                <div className={`singleIconContainer ${selectedOption==="chat"?"selected":""}`}
                onClick={()=> {
                    setSelectedOption("chat");
                }}>
                    <MessageSquareText />
                </div>
                <div className={`singleIconContainer ${selectedOption==="status"?"selected":""}`}
                onClick={()=> {
                    setSelectedOption("status");
                }}>
                    <CircleFadingPlus />
                </div>
                <div className={`singleIconContainer ${selectedOption==="Groups"?"selected":""}`}
                onClick={()=> {
                    setSelectedOption("Groups");
                }}>
                    <Users />
                </div>
                
                <div className={`singleIconContainer ${selectedOption==="newchat"?"selected":""}`}
                onClick={()=> {
                    setSelectedOption("newchat");
                }}>
                    <CirclePlus />
                </div>
            </div>
            <div className="statusBottomList">
                <div className={`singleIconContainer ${selectedOption==="settings"?"selected":""}`}
                onClick={()=> {
                    setSelectedOption("settings");
                }}>
                    <Settings />
                </div>
                <div className={`singleIconContainer ${selectedOption==="avatar"?"selected":""}`}
                onClick={()=> {
                    setSelectedOption("avatar");
                }}>
                    <UserAvatar />
                </div>
            </div>
        </div>
    );
}

export default UserStatusList