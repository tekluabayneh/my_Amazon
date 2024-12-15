import React from "react";
import { FadeLoader } from "react-spinners";
import "./Loader.css"
const Loader = () => {
  return (
    <div className="LoaderContainer">
      <FadeLoader />
    </div>
  );
};

export default Loader;
