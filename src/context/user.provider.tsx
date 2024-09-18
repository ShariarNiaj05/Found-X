import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IUser } from "../types";

const UserContext = createContext(undefined);

interface IUserProviderValue {
    user: IUser | null
    loading: boolean
    setUser: (user: IUser | null) => void
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
const UserProvider = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    return {
       <UserContext.Provider  value={{user, setUser,isLoading, setIsLoading}}></UserContext.Provider>
    }
};

export default UserProvider;
