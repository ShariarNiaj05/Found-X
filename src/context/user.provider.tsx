import { createContext, useState } from "react";

const userContext = createContext(undefined);

const UserProvider = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    return {
        <userContext.Provider value = {{user, setUser,isLoading, setIsLoading}}>
        
        </userContext.Provider >
    }
};

export default UserProvider;
