import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../services/AuthService";

interface IUserProviderValue {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContext = createContext<IUserProviderValue | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUser = async () => {
    const currentUser = await getCurrentUser();
    return currentUser;
  };
  useEffect(() => {}, []);
  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
