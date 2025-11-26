import { createContext } from "react";


type GlobalContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);
