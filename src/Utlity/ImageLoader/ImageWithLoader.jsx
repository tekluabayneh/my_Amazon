import React, { useState } from "react";
import "./imgloader.css"; // Import the spinner CSS

const ImageWithLoader = ({ src, alt, width, height }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: "relative", width, height }}>
      {loading && <div className="image-loader"></div>}
      <img
        src={src}
        alt={alt}
        style={{
          display: loading ? "none" : "block",
          width: "100%",
          height: "100%",
          paddingBottom: "2rem",
          borderRadius: "2px",
          margin: "0 0 0 3rem",
        }}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageWithLoader;
