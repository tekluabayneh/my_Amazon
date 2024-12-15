import React from "react";
import { Link } from "react-router-dom";
import SideBar_main_content from "./SideBar_man_content_container";

const SideBar = () => {
  const handleSignInClick = () => {
    console.log("Sign-in clicked");
    // Implement sign-in redirect logic here
  };

  return (
    <div>
      <SideBar_main_content />
    </div>
  );
};

export default SideBar;
