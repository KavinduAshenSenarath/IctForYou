import { useEffect, useState } from "react";
import axios from "axios ";

export default function Dashboard() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                "http://localhost:5000/api/users/profile",
                {
                    header: {
                        Authorization: `Bearer ${token}`
                    },
                }
            )
            setProfile(data.user)
        }
        fetchProfile();
    }, []);

    const logout = () => {
        localstorage.clear();
        window.location.href = "/login";
    };
    return (
        <div>
            <h1>Dashboard</h1>
            {profile && (
                <>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                    <p>Grade:{user.grade}</p>
                </>
            )}
            <button onClick={logout} > Logout </button>
        </div>
    )
}
