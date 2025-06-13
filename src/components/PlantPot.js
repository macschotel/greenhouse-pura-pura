import React from "react";

const PlantPot = ({ wish, onClick, imagePath, top, left }) => {
  return (
    <div
      onClick={() => onClick(wish)}
      style={{
        width: "clamp(60px, 20vw, 120px)", // dari 40px sampai maksimal 60px
        height: "clamp(60px, 20vw, 120px)",
        backgroundImage: `url(${encodeURI(imagePath)})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        position: "absolute",
        pointerEvents: "auto",
        top: top,
        left: left,
        zIndex: 2,
      }}
      title={`${wish.year}`}
    ></div>
  );
};

export default PlantPot;
