"use client"

import { useEffect, useState } from "react";

export default function CSR() {

    const [users, setUsers] = useState([]);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    const formattedTime = currentDate.toLocaleTimeString('en-GB', { hour12: false });
    const date = `${formattedDate} ${formattedTime}`;

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
            <h1 className="text-2xl font-bold m-3">Users (CSR)</h1>
            <h3 className="pl-3 font-bold text-xl mb-3" > Date: { date }</h3>
            <ul>
                {
                    users.length && users.map((user: any) => <li className="pl-3" key={user.id}>{user.firstName} </li>)
                }
            </ul>
        </div>
    );
  }
  