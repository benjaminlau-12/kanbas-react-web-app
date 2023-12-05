import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill, BsTrash3Fill, BsPlusCircleFill, BsPencil }
    from "react-icons/bs";
import * as client from "./client";
function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user) => {
        try {
            // const u = await client.findUserById(user._id);
            const u = await client.findUserByUsername(user.username);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u.username === user.username ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u.username !== user.username));
        } catch (err) {
            console.log(err);
        }
    };



    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td className="text-nowrap">
                            <BsPlusCircleFill onClick={createUser}
                                className="text-primary fs-1 text" />
                            <BsFillCheckCircleFill onClick={updateUser}
                                className="me-2 text-success fs-1 text" />
                        </td>
                    </tr>

                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td className="text-nowrap">
                                <button onClick={() => selectUser(user)}
                                    className="btn btn-warning me-2">
                                    <BsPencil />
                                </button>
                            </td>
                            <td>
                                <button onClick={() => deleteUser(user)}>
                                    <BsTrash3Fill />
                                </button>

                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;