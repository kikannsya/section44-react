import React, {useContext }from 'react'
import {Header} from "../templates/Header"
import {useLocation, Navigate} from "react-router-dom";
import {useState} from "react";
import { LoginUserContext } from '../elements/providers/LoginUserProvider';

export const Home = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const {isLogined} = useContext(LoginUserContext);

  if(!isLogined){
    return <Navigate to="/login"/>
  }
  else{
    return (
      <>
      <Header name="XYZ" />
      ホーム画面
      {data.username}
      </>
    );
  }
}
