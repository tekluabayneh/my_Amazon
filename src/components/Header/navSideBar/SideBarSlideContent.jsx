// MenuComponent.js
import React from "react";
import { menuData } from "../../../Utlity/Data";
import { Link } from "react-router-dom";

function MenuComponent({ handleClick, issubToggled, setisSubToggled, liRefs }) {
  return (
    <ul className={` hmenu hmenu-visible ${issubToggled ? "sub-toggled" : ""}`}>
      {menuData.menu.map((section, sectionIndex) => (
        <>
          <li key={sectionIndex}>
            <div className="hmenu-item hmenu-title">{section.title}</div>
          </li>
          {section.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <Link
                onClick={() => {
                  // check if the action is null and prevent from sliding
                  if (item.action == null) {
                    return;
                  } else {
                    /* check if the cliked action number is same to the storeed action number */
                    if (item.action == item.action) {
                      handleClick(liRefs.current[item.action]);
                      setisSubToggled(true);
                    }
                  }
                }}
                className="hmenu-item"
              >
                {item.label}
                {!item.icon && (
                  <span className="material-symbols-outlined pb-1  text-dark">
                    chevron_right
                  </span>
                )}
              </Link>
            </li>
          ))}
        </>
      ))}
    </ul>
  );
}

export default MenuComponent;
