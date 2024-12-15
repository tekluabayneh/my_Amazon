import React, { useContext, useState } from "react";
// import "material-symbols";
import { Link } from "react-router-dom";
import headerStyle from "./header.module.css";
import "./header.css";
import DevliverToPopup from "./DevliverToPopup";
import Language from "./Language";
import SigninPopup from "./SigninPopup";
import Temp from "./navSideBar/SideBar_man_content_container";
import HeaderSmallWidth from "./HeaderSmallWidth";
import { DataContext } from "../DataProvider/Dataprovider";
import { auth } from "../../Utlity/firebaseConfig/firebaseConfig";

const Header = () => {
  const { state, dispatch } = useContext(DataContext);
  const [Search, setSearch] = useState("");
  const [Overlay, setOverlay] = useState(false);
  const [languagePopup, setlanguagePopup] = useState(false);
  const [AccountPopup, setAcountPopup] = useState(false);
  const [LocationPopup, setLocationPopup] = useState(false);
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [togglesmallNavClose, settogglesmallNavClose] = useState(true);

  const TotalItem = state.basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  console.log(state.user?.email);

  /* handel the overlay when the input focus */
  const handleFocus = (e) => {
    setOverlay(true);
  };

  /* handel the overlay when the input Blure */
  const handelBlure = (e) => {
    setOverlay(false);
  };

  /* handel the overlay when the return link hover */
  const handelSigninnin = (e) => {
    let target = e.target;
    /*  check if the target has the class  add class*/
    if (target.className.includes("ENG")) {
      setOverlay(true);
      setAcountPopup(false);
      setlanguagePopup(true);
    } else if (target.className.includes("Acount")) {
      setOverlay(true);
      setlanguagePopup(false);
      setAcountPopup(true);
    }
  };

  /* handel the overlay when the return link mouseout */
  const handelRSigninout = (e) => {
    let target = e.target;
    /*  check if the target has the class  remove class*/
    if (target.className.includes("ENG")) {
      setOverlay(false);
    } else if (target.className.includes("Acount")) {
      setOverlay(false);
    }
  };

  /* handele the search nav input */
  const handelSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header
      className={`${headerStyle.mainHeader} d-flex flex-column bg-primary`}
    >
      {/*  */}
      <Temp isSideBarOpen={isSideBarOpen} setisSideBarOpen={setisSideBarOpen} />
      {/*  */}
      <div className={`${Overlay ? "overlay" : ""}`}></div>

      <div className={` ${headerStyle.header} header px-2`}>
        {/*  */}
        <div className={`headerleftLogo ${headerStyle.TopLogoContainer}`}>
          <div className="Toplogo top">
            <Link to="/">
              <img
                className="img-fluid logoImage"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              ></img>
            </Link>
          </div>
          <div className="TopLeftlocation d-flex align-items-center ">
            {/*  */}

            <DevliverToPopup
              setLocationPopup={setLocationPopup}
              setOverlay={setOverlay}
              LocationPopup={LocationPopup}
            />
            {/*  */}
            <span className="locationIconContainer">
              <i className="material-symbols-outlined location-icon">
                location_on
              </i>
            </span>
            <div
              onClick={() => {
                setLocationPopup(true);
                setOverlay(true);
              }}
              className="deliverAndLocationContainer"
            >
              <span className="deliver">Deliver to</span>
              <span className="countryName">Ethopia</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          className={`headerCenterSearchBar ${headerStyle.centerSearchContainer} `}
        >
          <div className={`${headerStyle.centerSubContainer}`}>
            <select name="country" className="country">
              <option value="home">Ethopia</option>
              <option value="home">USA</option>
              <option value="home">canada</option>
              <option value="home">london</option>
              <option value="home">tur</option>
            </select>
            <input
              value={Search}
              onChange={(e) => handelSearchInput(e)}
              onFocus={handleFocus}
              onBlur={handelBlure}
              type="text"
              placeholder="search"
            />
            <i className="material-symbols-outlined">search</i>
          </div>
        </div>
        {/*  */}
        <div className="nav-right">
          <div className="nav-tools layoutToolbarPadding">
            <Link
              onMouseEnter={handelSigninnin}
              onMouseOut={handelRSigninout}
              to=""
              className="nav-ENG ENG"
            >
              <div className="icp-nav-link-inner ENG">
                {/* language poup*/}
                <Language />

                {/*  */}
                <span className="nav-line-2">
                  <span className="icp-nav-flag icp-nav-flag-us icp-nav-flag-lop">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                      alt="US Flag"
                      className="flag ENG"
                    ></img>
                  </span>
                  <div className="fw-bold pt-1 ENG">
                    EN
                    <span className="material-symbols-outlined nav-arrowIcon ENG">
                      arrow_drop_down
                    </span>
                  </div>
                </span>
              </div>
            </Link>

            <Link
              to={state.user ? "" : "/Auth"}
              onMouseEnter={handelSigninnin}
              onMouseOut={handelRSigninout}
              className="navsigninContainer Acount"
            >
              <SigninPopup />

              <div className="nav-line-1-container Acount">
                <span className="Acount nav-link-accountList-nav-line-1 nav-line-1 nav-progressive-content">
                  <div>
                    {state.user ? (
                      <>
                        <p> Hello {state.user?.email?.split("@")[0]}</p>
                        <span onClick={() => auth.signOut()}>Sign Out</span>
                      </>
                    ) : (
                      <>
                        <p>Sign in</p>
                        <span>Account & lists</span>
                      </>
                    )}
                  </div>
                </span>
                {/* <span className="nav-line-2 fw-bold Acount">
                  Account &amp; Lists
                  <span className="material-symbols-outlined nav-arrowIcon Acount">
                    arrow_drop_down
                  </span>
                </span> */}
              </div>
            </Link>

            <Link to="order" className="retrun_Container">
              <span className="nav-line-1">Returns</span>
              <span className="nav-line-2 fw-bold">
                &amp; Orders<span className="nav-icon nav-arrow"></span>
              </span>
            </Link>

            <Link to="/cart" className="cart_Container">
              <div className="nav-cart-count-container">
                <span className="nav-cart-count text-danger fw-bold-4">
                  {TotalItem}
                </span>
                <svg
                  className="nav-cart-icon"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 32 32"
                  scale="80"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 4 7 C 3.449219 7 3 7.449219 3 8 C 3 8.550781 3.449219 9 4 9 L 6.21875 9 L 8.84375 19.5 C 9.066406 20.390625 9.863281 21 10.78125 21 L 23.25 21 C 24.152344 21 24.917969 20.402344 25.15625 19.53125 L 27.75 10 L 25.65625 10 L 23.25 19 L 10.78125 19 L 8.15625 8.5 C 7.933594 7.609375 7.136719 7 6.21875 7 Z M 22 21 C 20.355469 21 19 22.355469 19 24 C 19 25.644531 20.355469 27 22 27 C 23.644531 27 25 25.644531 25 24 C 25 22.355469 23.644531 21 22 21 Z M 13 21 C 11.355469 21 10 22.355469 10 24 C 10 25.644531 11.355469 27 13 27 C 14.644531 27 16 25.644531 16 24 C 16 22.355469 14.644531 21 13 21 Z M 16 7 L 16 12 L 13 12 L 17 16 L 21 12 L 18 12 L 18 7 Z M 13 23 C 13.5625 23 14 23.4375 14 24 C 14 24.5625 13.5625 25 13 25 C 12.4375 25 12 24.5625 12 24 C 12 23.4375 12.4375 23 13 23 Z M 22 23 C 22.5625 23 23 23.4375 23 24 C 23 24.5625 22.5625 25 22 25 C 21.4375 25 21 24.5625 21 24 C 21 23.4375 21.4375 23 22 23 Z"></path>
                </svg>
              </div>
              <div className="nav-cart-text-container nav-progressive-attribute">
                <span className="nav-line-2 fw-bold pt-2">Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/*small width navbar  */}
      <div className={`${headerStyle.smallwidth_qwrapper}`}>
        <ul className={`${headerStyle.sm_navBar}`}>
          <div className="Toplogo">
            <Link to="/">
              <img
                style={{ width: "70px" }}
                className="logoImage"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              ></img>
            </Link>
          </div>

          <div>
            <span
              onClick={() => {
                settogglesmallNavClose(false);
              }}
              className="material-symbols-outlined text-white menuIcon"
            >
              menu
            </span>
          </div>
        </ul>

        {/* small navbar end here */}

        <div className="navBottomContainer d-flex align-items-center justyfy-content-between">
          <ul className="w-100 pt-3 cursor-pointer ms-2 d-flex gap-3 align-items-center justify-content-start text-white list-unstyled">
            <li
              onClick={() => setisSideBarOpen(true)}
              className="d-flex align-items-center"
            >
              <i className="material-icons">menu</i>
              <span className="fs-6">All</span>
            </li>
            <li className="navBottomContainer_link">
              <Link to="/product">Today's Deals</Link>
            </li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Card</li>
            <li>Sell</li>
          </ul>

          <div className="rightSideNav">
            <span className="text-white pt-2">Shop Cyber Monday Deals</span>
          </div>
        </div>
      </div>
      <HeaderSmallWidth
        togglesmallNavClose={togglesmallNavClose}
        settogglesmallNavClose={settogglesmallNavClose}
      />
    </header>
  );
};

export default Header;
