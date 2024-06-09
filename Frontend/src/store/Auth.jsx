import { createContext, useContext, useEffect, useState } from "react";

// context
export const AuthContext = createContext();


// provider
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storingTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    // checking whether the token state variable has token or not 
    const isTokenAvailable = !!token;
    // console.log(isTokenAvailable)

    // logout user 
    const logOutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    // JWT AUTHENTICATION : to get in the currently user logged in data 
    const userAuthentication = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/user/userinfo`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userAuthentication();
    }, [userAuthentication])




    return <AuthContext.Provider value={{ isTokenAvailable, storingTokenInLS, logOutUser, user }}>
        {children}
    </AuthContext.Provider>
}

// consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}
