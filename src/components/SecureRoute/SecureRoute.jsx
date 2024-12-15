import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/Dataprovider";

const SecureRoute = ({ children, msg, redirect }) => {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.user) {
      navigate("/Auth", { state: { msg: msg, redirect: redirect } });
    } else {
    }
  }, [state.user]);
  return children;
};

export default SecureRoute;
