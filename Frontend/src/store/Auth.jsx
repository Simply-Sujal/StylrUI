import { createContext, useContext, useEffect, useState } from "react";

// context
export const AuthContext = createContext();

// provider
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const storingTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
        return Promise.resolve();
    };

    // checking whether the token state variable has token or not 
    let isTokenAvailable = !!token;

    // logout user 
    const logOutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    // JWT AUTHENTICATION : to get in the currently user logged in data 
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://stylr-ui-backend.vercel.app/api/v1/user/userinfo`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (token) {
            userAuthentication();
        } else {
            setIsLoading(false);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ isTokenAvailable, storingTokenInLS, logOutUser, user, userAuthentication }}>
            {children}
        </AuthContext.Provider>
    );
};

// consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
