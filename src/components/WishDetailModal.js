import React from "react";

const WishDetailModal = ({ wish, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(228, 178, 178, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/modul portrait/Asset 7.svg")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90%",
          maxWidth: "400px",
          height: "90vh",
          padding: "4rem 1.5rem",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "1.5rem",
          }}
          className="chelsea-market-regular"
        >
          {wish.year}
        </h2>

        <div
          style={{
            flex: "1",
            overflowY: "auto",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            paddingBottom: "1rem", // biar gak nabrak tombol
            boxSizing: "border-box",
            textAlign: "justify",
          }}
        >
          {wish.wishes.map((w, i) => (
            <p
              key={i}
              className="patrick-hand-regular"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                lineHeight: "1.2",
                wordBreak: "break-word",
              }}
            >
              {w.text}
            </p>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
          }}
        >
          <button onClick={onClose}>
            <img
              src="/button jadi/button tutup/Asset 19.svg"
              alt="Seed"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: "0.3rem",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishDetailModal;
