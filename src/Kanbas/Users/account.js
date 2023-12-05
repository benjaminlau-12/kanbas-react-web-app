import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signin = async () => {
        navigate("/Kanbas/signin");
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
    };

    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {!account && (
                <div>
                    <h1><a onClick={signin}>Click me to sign in!</a></h1>
                </div>
            )}
            {account && (
                <div>
                    <label>Username</label>
                    <input value={account.username}
                        onChange={(e) => setAccount({
                            ...account,
                            username: e.target.value
                        })} /> <br />
                    <label>Password</label>
                    <input value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} /> <br />
                    <label>First Name</label>
                    <input value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} /><br />
                    <label>Last Name</label>
                    <input value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} /><br />
                    <label>Date of Birth</label>
                    <input value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} /><br />
                    <label>Email</label>
                    <input value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} /><br />
                    <label>Role</label>
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select><br />
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>

                    <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;

