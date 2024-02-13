import React, { createContext } from 'react'
import {CreateContext, useState} from "react";

export const LoginUserContext = createContext({});

export const LoginUserProvider = (props) => {
    const  {children } = props;
    const [loginUser, setLoginUser] = useState("");
    const [isLogined, setIsLogined] = useState(false);

    return (
    <LoginUserContext.Provider value={{loginUser, setLoginUser, isLogined, setIsLogined}}>
        {children}
    </LoginUserContext.Provider>
  )
}
