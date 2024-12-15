import React, { useRef, useState } from "react";
import "./SideBar.css";
// import { Link } from "react-router-dom";
// import { menuData } from "../../../Utlity/Data";
import MenuComponent from "./SideBarSlideContent";
import SideSubContent from "./SideSubContent";
const SideBar_main_content = ({ isSideBarOpen, setisSideBarOpen }) => {
  const [issubToggled, setisSubToggled] = useState(false);

  function toggleSidebarSubMenu(clickedLi, allLis) {
    allLis.forEach((li) => {
      if (li !== clickedLi) {
        li.style.transform = "translateX(-500px)";
      } else {
        li.style.transform = "translateX(0px)";
      }
    });
  }

  const liRefs = useRef([]);

  const handleClick = (clickedLi) => {
    toggleSidebarSubMenu(clickedLi, liRefs.current);
  };

  return (
    <>
      <div className={`${isSideBarOpen ? "SideBarOverlay" : ""}`}></div>
      <div className={`hmenu-content ${isSideBarOpen ? "SideBarACtive" : ""}`}>
        <span
          onClick={() => setisSideBarOpen(false)}
          className="material-symbols-outlined btnClose"
        >
          close
        </span>

        <div className="hmenu-customer-profile">
          <span className="material-symbols-outlined text-white">
            account_circle
          </span>
          <div id="hmenu-customer-profile-right">
            <b className="text-white fw-bold">Hello, sign in</b>
          </div>
        </div>
        <div className="wrapper">
          {/* single sub links */}

          <MenuComponent
            handleClick={handleClick}
            issubToggled={issubToggled}
            setisSubToggled={setisSubToggled}
            liRefs={liRefs}
          />

          <SideSubContent
            handleClick={handleClick}
            issubToggled={issubToggled}
            setisSubToggled={setisSubToggled}
            liRefs={liRefs}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar_main_content;
