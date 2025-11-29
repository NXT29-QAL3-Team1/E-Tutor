import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext({});

export default function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        const getUser = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/auth/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(res.data); // مفيش ".user" هنا
            } catch (err) {
                console.log(err);
                setUser(null);
            }
        };

        getUser();
    }, []);


    const updateUser = (newUserData) => {
        setUser((prev) => ({ ...prev, ...newUserData }));
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
