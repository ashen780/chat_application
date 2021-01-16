import React from 'react';
import './TextContainer.css';
const TextContainer = ({users}) => {
    console.log(users.users);
    return (
        <div className='textContainer'>
            <ul>
            {users.users.map((user)=><li>{user.name}</li>)}

            </ul>
        </div>
    )
}

export default TextContainer
