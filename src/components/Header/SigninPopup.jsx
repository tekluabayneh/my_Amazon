import React from "react";
import { Link } from "react-router-dom";

const SigninPopup = () => {
  return (
    <div>
      <div
        id="nav-flyout-accountList"
        className={`nav-coreFlyout nav-flyout-accountList`}
      >
        <div className="nav-arrow">
          <div className="nav-arrow-inner"></div>
        </div>

        <div className="nav-template nav-flyout-content">
          <div id="nav-al-signin">
            <div id="nav-flyout-ya-signin " className="nav-flyout-content">
              <Link
                to={"/Auth"}
                className="nav-action-signin-button Account"
                data-nav-role="signin"
              >
                <span className="nav-action-inner text-dark Acount">
                  Sign in
                </span>
              </Link>

              <div id="nav-flyout-ya-newCust" className="nav_pop_new_cust">
                <span className="text-dark"> New customer?</span>
                <Link to="">Start here.</Link>
              </div>
            </div>
          </div>

          <div id="nav-al-container">
            <div
              id="nav-al-wishlist"
              className="nav-al-column nav-tpl-itemList nav-flyout-content pt-5 me-4"
            >
              <div
                className="nav-title text-dark fw-bold fs-6"
                id="nav-al-title "
              >
                Your Lists
              </div>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Create a List</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Find a List or Registry</span>
              </Link>
            </div>

            <div
              id="nav-al-your-account"
              className="nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility"
            >
              <div className="nav-title fw-bold fs-6 text-dark">
                Your Account
              </div>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Account</span>
              </Link>
              <Link
                to={""}
                id="nav_prefetch_yourorders"
                className="nav-link nav-item"
              >
                <span className="nav-text">Orders</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Recommendations</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Browsing History</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Watchlist</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Video Purchases & Rentals</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Kindle Unlimited</span>
              </Link>
              <Link to="" className="nav-link nav-item">
                <span className="nav-text">Content & Devices</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Subscribe & Save Items</span>
              </Link>
              <Link to="" className="nav-link nav-item">
                <span className="nav-text">Memberships & Subscriptions</span>
              </Link>
              <Link to={""} className="nav-link nav-item">
                <span className="nav-text">Music Library</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPopup;
