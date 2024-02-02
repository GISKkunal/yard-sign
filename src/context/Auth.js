import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import apiConfig, { socket } from "src/config/APICongig";
import { calculateTimeLeft } from "src/views/auth/forget-password-link/timer";
import moment from "moment";
// import ApiConfig from "src/config/APICongig";

export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("creatturAccessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Creattur ${accessToken}`;
  } else {
    localStorage.removeItem("creatturAccessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin() {
  const accessToken = window.localStorage.getItem("creatturAccessToken");
  return accessToken ? true : false;
}

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());

  const [endTime, setEndtime] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  let data = {
    userLoggedIn: window.localStorage.getItem("token") ? true : false,
    setEndtime,
    setTimeLeft,
    isLoading,
    timeLeft,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };

  return (
    // <AuthContext.Provider value={data}>{""}</AuthContext.Provider>
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
