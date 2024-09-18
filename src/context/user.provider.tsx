import { createContext, useState } from "react";

const UserContext = createContext(undefined);

const UserProvider = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    return {
       <UserContext.Provider  value={{user, setUser,isLoading, setIsLoading}}></UserContext.Provider>
    }
};

export default UserProvider;
