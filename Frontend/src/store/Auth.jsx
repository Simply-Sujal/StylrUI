import { createContext, useContext } from "react";

// context
export const AuthContext = createContext();


// provider
export const AuthProvider = ({ children }) => {

    const storingTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    return <AuthContext.Provider value={{ storingTokenInLS }}>
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
