import { createContext, useReducer, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { reducer } from "./reducer";



const initialState = {
  user: "Harsha",
  theme: "light",
};
export function GlobalProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state,dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
