import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        // console.log(name,room);
        setName(name);
        setRoom(room);
        // console.log(socket);
        socket.emit('join', { name, room });
    }, [ENDPOINT,location.search]);
    return (
        <div>
            <h1>chat</h1>
        </div>
    )
}

export default Chat
