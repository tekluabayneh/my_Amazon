import React from "react";
import { SliderSubContent } from "../../../Utlity/Data";
import { Link } from "react-router-dom";
const SideSubContent = ({
  handleClick,
  issubToggled,
  setisSubToggled,
  liRefs,
}) => {
  return (
    <>
      <ul
        ref={(el) => (liRefs.current[0] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[0].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[1] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[1].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[2] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[2].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[3] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[3].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[4] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[4].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[5] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[5].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[6] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[6].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[7] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[7].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[8] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[8].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

      <ul
        ref={(el) => (liRefs.current[9] = el)}
        className={`navSubDetail ${issubToggled ? "" : "sub-toggled"}`}
      >
        {SliderSubContent.menus[9].items.map((item, index) => {
          if (item.type == "back") {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setisSubToggled(false);
                    handleClick(liRefs.current[1212]);
                  }}
                  className="hmenu-item hmenu-back-button"
                >
                  <div className="mt-3 d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          }
          if (item.type == "title") {
            return (
              <li key={index}>
                <div className="hmenu-item hmenu-title">{item.label}</div>
              </li>
            );
          }
          return (
            <>
              <li>
                <Link className="hmenu-item">{item.label}</Link>
              </li>
            </>
          );
        })}
        <span className="hmenu-separator">.</span>
      </ul>

    </>
  );
};

export default SideSubContent;
