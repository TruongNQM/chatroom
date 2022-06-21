import { auth } from '../../firebase/config';
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({child}) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                const { displayName, email, userId, photoUrl } = user;
                setUser({
                    displayName, email, userId, photoUrl
                })
                navigate("/", { replace: true });
            }
        })
        return () => {
            unSubscribe();
        }
    }, [navigate])
    return(
        <AuthContext.Provider value={{user}}>
            {child}
        </AuthContext.Provider>
    )
};

export default AuthProvider;