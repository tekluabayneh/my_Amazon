import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ErrorPage.css";

const ErrorPage = () => {
  const errorTitleRef = useRef();
  const errorMessageRef = useRef();
  const floatingImgRef = useRef();

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      errorTitleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Message animation
    gsap.fromTo(
      errorMessageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title" ref={errorTitleRef}>
          404
        </h1>
        <p className="error-message" ref={errorMessageRef}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="error-actions">
          <a href="/" className="quick-link">
            Go Back Home
          </a>
          <a href="/product" className="quick-link">
            Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
