import React from 'react'
import User from '../../components/user'

const UsersList = ({users}) => {
  return (
    <>
        UsersList
        {
            users.map(user => {
                return <div key={user.id}>
                    <User user={user} />
                </div>
            })
        }
     
        
    </>
  )
}

export default UsersList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
    return {
        props:{
            users:data
        }
    }

}