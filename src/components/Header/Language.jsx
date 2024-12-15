import React from "react";
import { Link } from "react-router-dom";

const Language = ({ handelSigninnin, handelRSigninout }) => {
  return (
    <div>
      <div className={`nav-line-1 language_container`}>
        <div id="nav-flyout-language" className="nav-coreFlyout nav-flyout">
          <div className="nav-arrow">
            <div className="nav-arrow-inner"></div>
          </div>
          <div className="nav-template nav-flyout-content nav-tpl-itemList">
            <span className="nav-item">
              <span className="nav-text text-dark">
                Change language
                <Link
                  className="icp-flyout-learn-more ms-1"
                  aria-label="Learn more about changing your language of preference."
                >
                  Learn more
                </Link>
              </span>
            </span>
            <Link
              className="nav-link nav-item"
              lang="en-US"
              aria-current="true"
              to="#"
            >
              <span className="nav-text">
                <i className="icp-radio icp-radio-active"></i>
                <span className="active_radio" dir="ltr">
                  English
                </span>{" "}
                - <span dir="ltr">EN</span>
              </span>
            </Link>
            <div className="nav-divider"></div>
            <Link className="nav-link nav-item" lang="es-US" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="ltr">español</span> - <span dir="ltr">ES</span>
              </span>
            </Link>
            <Link
              className="nav-link nav-item"
              lang="ar-AE"
              to="#switch-lang=ar_AE"
            >
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="rtl">العربية</span> - <span dir="ltr">AR</span>
              </span>
            </Link>
            <Link className="nav-link nav-item" lang="de-DE" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="ltr">Deutsch</span> - <span dir="ltr">DE</span>
              </span>
            </Link>
            <Link className="nav-link nav-item" lang="he-IL" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="rtl">עברית</span>-<span dir="ltr">HE</span>
              </span>
            </Link>
            <Link className="nav-link nav-item" lang="ko-KR" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span
                  style={{ unicodeBidi: "isolate", direction: "ltr" }}
                  dir="ltr"
                >
                  한국어
                </span>{" "}
                -{" "}
                <span
                  style={{ unicodeBidi: "isolate", direction: "ltr" }}
                  dir="ltr"
                >
                  KO
                </span>
              </span>
            </Link>
            <Link className="nav-link nav-item" lang="pt-BR" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="ltr">português</span> - <span dir="ltr">PT</span>
              </span>
            </Link>
            <Link className="nav-link nav-item" lang="zh-CN" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="ltr">中文 (简体)</span> - <span dir="ltr">ZH</span>
              </span>
            </Link>
            <Link className="nav-link nav-item" lang="zh-TW" to="#">
              <span className="nav-text">
                <i className="icp-radio"></i>
                <span dir="ltr">中文 (繁體)</span> - <span dir="ltr">ZH</span>
              </span>
            </Link>
            <div className="nav-divider icp-flyout-curr-divider"></div>
            <span className="nav-item">
              <span className="nav-text text-dark">
                Change currency
                <Link className="icp-flyout-learn-more ms-1" to="#">
                  Learn more
                </Link>
              </span>
            </span>
            <span className="nav-item">
              <span className="nav-text">
                <span>
                  <span dir="ltr">$</span>-<span dir="ltr">USD</span>
                  -US Dollar
                </span>
                <Link className="icp-flyout-change ms-4" to="#">
                  Change
                </Link>
              </span>
            </span>
            <div className="nav-divider icp-flyout-curr-divider"></div>
            <span className="nav-item">
              <span className="nav-text text-dark">
                <i className="icp-flyout-flag icp-flyout-flag-us"></i>
                You are shopping on{" "}
                <span className="ms-1" dir="ltr">
                  Amazon.com
                </span>
              </span>
            </span>
            <Link
              className="nav-link nav-item"
              id="icp-flyout-mkt-change"
              to="#"
            >
              <span className="nav-text text-primary ms-4">
                <div className="icp-mkt-change-lnk">Change country/region.</div>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
