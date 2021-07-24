import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res)
            setUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])   

    return (
        <div className='row mt-3'>
            {users.map((user) => (
            <UserCard user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;