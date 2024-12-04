import React from 'react'
import "./UserAvatar.css"
const UserAvatar = () => {
  return (
    <div className="userAvatarContainer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/168/168726.png"
        className="userAvatarImage"
        alt="User Avatar"
      />
    </div>
  );
}

export default UserAvatar;
