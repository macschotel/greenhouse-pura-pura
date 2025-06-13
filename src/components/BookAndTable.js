import React from "react";

const BookAndTable = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        bottom: "2rem",
        left: "48%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "auto",
        zIndex: 2,
      }}
    >
      <img
        src="/laci dan buku tertutup/Asset 5.svg"
        alt="Book And Table"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <span
        style={{
          marginTop: "0.3rem",
          fontSize: "0.8rem",
          color: "#4a4a4a",
        }}
      ></span>
    </div>
  );
};

export default BookAndTable;
