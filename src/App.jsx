import { useContext, useEffect, useState } from "react";
import "./App.css";
import MainRouter from "./Router";
import { auth } from "./Utlity/firebaseConfig/firebaseConfig";
import { DataContext } from "./components/DataProvider/Dataprovider";
import { Type } from "./Utlity/action.type";
function App() {
  const { state, dispatch } = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((userinfo) => {
      if (userinfo) {
        dispatch({
          type: Type.SET_USER,
          user: userinfo.user,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
