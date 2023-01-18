import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const csrf = () => axios.get('http://localhost:8000/sanctum/csrf-cookie');

    const getUser = async () => {
        const { data } = await axios.get('http://localhost:8000/api/user');
        setUser(data);
    }

    const login = async ({ ...data }) => {
        await csrf();
        try {
            await axios.post('http://localhost:8000/login', data);
            await getUser();
            navigate("/");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const register = async ({ ...data }) => {
        await csrf();
        try {
            await axios.post('http://localhost:8000/register', data);
            await getUser();
            navigate("/");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const logout = () => {
        axios.post('http://localhost:8000/logout').then(() => {
            setUser(null);
        })
    }

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);

    return <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}