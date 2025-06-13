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
        right: "5%",
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
          width: "clamp(60px, 40vw, 200px)",
          height: "clamp(60px, 40vw, 200px)",
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
