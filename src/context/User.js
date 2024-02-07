import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./Auth";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { FaRubleSign } from "react-icons/fa";
export const UserContext = createContext();

export default function AuthProvider(props) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [kycStatus, setKycStatus] = useState();
  const [exchangeBalance, setExchangeBalance] = useState({});

  const getViewMyProfile = async (values) => {
    const token = localStorage.getItem("token");

    try {
      const res = await Axios({
        method: "GET",
        url: ApiConfig.viewMyProfile,
        headers: { token: token },
      });

      if (res.data.responseCode === 200) {
        setProfile(res.data.result);
        setKycStatus(res.data.result.kycVerified);
      } else {
        toast.error(res.data.responseMessage);
      }
    } catch (error) {
      if (
        error.response.data.responseMessage === "Unauthorized person." ||
        error.response.data.responseMessage === "USER NOT FOUND" ||
        error.response.data.responseMessage ===
          "Session Expired, Please login again."
      ) {
        navigate("/login");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("email");
      } else {
        toast.error("Server down");
      }
    }
  };
  const exchangeWallet = async (values) => {
    const token = localStorage.getItem("token");

    try {
      const res = await Axios({
        method: "POST",
        url: ApiConfig.exchangeWallet,
        headers: { token: token },
      });

      if (res.data.statusCode === 200) {
        setExchangeBalance(res.data.result);
      } else {
        // toast.error(res.data.responseMessage);
      }
    } catch (error) {}
  };

  const kycUpdated = (props) => {
    setKycStatus(props);
  };
  // useEffect(() => {
  //   getViewMyProfile();
  // }, []);
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      getViewMyProfile();
    }
  }, []);

  let data = {
    profile,
    exchangeBalance,
    kycStatus,
    getViewMyProfile: () => getViewMyProfile(),
    kycUpdated: () => kycUpdated(),
    exchangeWallet: () => exchangeWallet(),
  };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
