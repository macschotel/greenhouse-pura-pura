import React from "react";

const PlantPot = ({ wish, onClick, imagePath, top, left }) => {
  return (
    <div
      onClick={() => onClick(wish)}
      style={{
        width: "60px",
        height: "60px",
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
