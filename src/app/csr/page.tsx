"use client"

import { useEffect, useState } from "react";

export default function CSR() {

    const [users, setUsers] = useState([]);

    console.log("Users", users);
    

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch("https://dummyjson.com/users");
            const result = await res.json();
            setUsers(result.users);
        };

        fetchUsers();
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.length && users.map((user: any) => <li key={user.id}>{user.firstName} </li>)
                }
            </ul>
        </div>
    );
  }
  