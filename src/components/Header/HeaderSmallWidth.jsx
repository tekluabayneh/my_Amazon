import React, { useState } from "react";
import "./smallwidth.css";
const HeaderSmallWidth = ({ togglesmallNavClose, settogglesmallNavClose }) => {
  return (
    <>
      <div
        className={`sm-width-nav-wrapper ${
          togglesmallNavClose ? "sm-width-nav-wrapper_Active" : ""
        }`}
      >
        <ul className="sm-navContainer">
          <li>
            <a href="/Auth" className="helloSignin_container">
              <span className="helloSignin">Hello,sign in</span>
            </a>
            <span className="activeLink"></span>
          </li>

          <li>
            <a href="">
              <span className="nav-line-2">Account &amp; Lists</span>
            </a>
            <span className="activeLink"></span>
          </li>
          <li>
            <a href="/order" className="retrun_Container">
              <span className="nav-line-1">Returns &amp; Orders</span>
            </a>
            <span className="activeLink"></span>
          </li>
          <li>
            <a href="/cart" className="cart_Container">
              <div>
                <span aria-hidden="true" className="nav-line-2 fw-bold pt-2">
                  Cart
                </span>
              </div>
            </a>
            <span className="activeLink"></span>
          </li>
        </ul>

        <ul className="sm-logoContainer">
          <li onClick={() => settogglesmallNavClose(true)}>
            <span className="material-symbols-outlined">close</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderSmallWidth;
