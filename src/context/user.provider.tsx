import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IUser } from "../types";


interface IUserProviderValue {
    user: IUser | null
    loading: boolean
    setUser: (user: IUser | null) => void
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
const UserContext = createContext<IUserProviderValue | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    return {
        <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading}} >
        {children}
      </UserContext.Provider>
    }
};

export default UserProvider;
