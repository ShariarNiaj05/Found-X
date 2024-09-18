import { createContext, useState } from "react";
import { IUser } from "../types";

const UserContext = createContext(undefined);

interface IUserProviderValue {
    user: IUser | null
    loading: boolean
}
const UserProvider = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    return {
       <UserContext.Provider  value={{user, setUser,isLoading, setIsLoading}}></UserContext.Provider>
    }
};

export default UserProvider;
