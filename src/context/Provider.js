import React, { createContext, useReducer } from "react";
import auth from "./reducers/auth";
import { authInitial } from "./InitialState"

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitial);

    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};