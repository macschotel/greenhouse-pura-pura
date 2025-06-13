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
        left: "80%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "0.8rem",
        color: "#4a4a4a",
        pointerEvents: "auto",
        zIndex: 3,
      }}
    >
      <img
        src="/bijiku/Asset 6.svg"
        alt="Seed"
        style={{
          width: "120px",
          height: "120px",
          marginBottom: "0.3rem",
        }}
      />
    </button>
  );
};

export default SeedButton;
