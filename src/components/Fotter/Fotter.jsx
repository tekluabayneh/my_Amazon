import React from "react";
import { Topfooter } from "../../data/Fotter";
import { Bottmfooter } from "../../data/Fotter";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="backToTopBtn">
        <button onClick={() => backToTop()}>Back to Top</button>
      </div>
      <footer className="main_footer_container">
        {Topfooter.sections.map((footer, index) => {
          return (
            <div key={index} className="FooterSub_container">
              <ul>
                <h5>{footer.heading}</h5>
                {footer.links.map((links, index) => {
                  return (
                    <ul key={index}>
                      <li>{links.text}</li>
                    </ul>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </footer>
      <div>
        <div className="footerLogo_and_language-container">
          {/* Footer Logo Section */}
          <div className="footer-logo-section">
            <Link className="footer-logo-link">
              <img
                className="logoImage"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                style={{ width: "80px" }}
              ></img>
            </Link>
          </div>

          {/* Language and Currency Section */}
          <div className="footer-settings">
            <Link className="footer-settings-link">
              <span class="material-symbols-outlined">language</span>
              <span className="settings-text">English</span>
              <span className="arrow-icon">
                <span className="material-symbols-outlined">arrow_drop_up</span>
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </span>
            </Link>

            <Link className="footer-settings-link">
              <span className="currency-symbol">$</span>
              <span className="settings-text">USD - U.S. Dollar</span>
            </Link>

            <Link className="footer-settings-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
                className="flag ENG"
              ></img>
              <span className="settings-text">United States</span>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom_main grid footer */}
      <div className="footerBottom_container">
        {Bottmfooter.map((BottomFotter, index) => {
          return (
            <div key={index}>
              <ul>
                <h6>{BottomFotter.title}</h6>
                <li>{BottomFotter.description}</li>
              </ul>
            </div>
          );
        })}
      </div>

      {/* last footer */}

      <div className="copyright-section">
        <ul className="footer-links">
          <li className="footer-link-item">
            <Link className="footer-link">Conditions of Use</Link>
          </li>
          <li className="footer-link-item">
            <Link className="footer-link">Privacy Notice</Link>
          </li>
          <li className="footer-link-item">
            <Link className="footer-link">
              Consumer Health Data Privacy Disclosure
            </Link>
          </li>
          <li className="footer-link-item">
            <Link href="/privacyprefs" className="footer-link">
              Your Ads Privacy Choices
            </Link>
          </li>
          <li className="footer-icon-item">
            <span className="footer-icon"></span>
          </li>
        </ul>
        <span className="footer-copyright-text">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </>
  );
};

export default Footer;
