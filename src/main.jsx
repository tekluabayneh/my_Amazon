import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import "./index.css";
import App from "./App.jsx";
import { Dataprovider } from "./components/DataProvider/Dataprovider.jsx";
import { reducer, initialState } from "./Utlity/Reducer/Reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dataprovider initialState={initialState} reducer={reducer}>
      <App />
    </Dataprovider>
  </StrictMode>
);
