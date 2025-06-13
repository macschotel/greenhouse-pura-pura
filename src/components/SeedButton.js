import React from "react";

const SeedButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        bottom: "2rem",
        left: "50%", // centerin
        transform: "translateX(40%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "auto",
        zIndex: 3,
      }}
    >
      <img
        src="/bijiku/Asset 6.svg"
        alt="Seed"
        style={{
          width: "70vw",
          maxWidth: "100px",
          height: "auto",
        }}
      />
      <span
        style={{
          marginTop: "0.3rem",
          fontSize: "0.8rem",
          color: "#4a4a4a",
        }}
      ></span>
    </button>
  );
};

export default SeedButton;
