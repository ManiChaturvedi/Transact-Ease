import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getApiUrl } from "../config";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        // Get current user ID from token
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setCurrentUserId(decoded.userId);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, []);

    useEffect(() => {
        axios.get(getApiUrl(`/api/v1/user/bulk?filter=${filter}`))
            .then(response => {
                // Filter out the current user from the list
                const filteredUsers = response.data.user.filter(user => 
                    user._id !== currentUserId
                );
                setUsers(filteredUsers);
            });
    }, [filter, currentUserId]);

    return (
        <>
            <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                />
            </div>
            <div>
                {users.map(user => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>{user.firstName} {user.lastName}</div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <Button
                    onClick={() => navigate("/send?id=" + user._id + "&name=" + user.firstName)}
                    label={"Send Money"}
                />
            </div>
        </div>
    );
}
