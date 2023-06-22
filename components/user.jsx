import React from 'react'

const User = ({user}) => {
  return (
    <div>                    
        <p>{user.id} - {user.name}</p>
        
    </div>
  )
}

export default User