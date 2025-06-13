import React from "react";

const Greenhouse = ({ children, imagePath }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        aspectRatio: "3 / 5", // atau paddingTop kalau belum support
        backgroundColor: "blue", // biar kelihatan dulu
        backgroundImage: imagePath ? `url(${encodeURI(imagePath)})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default Greenhouse;
