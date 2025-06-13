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
        backgroundColor: "rgba(241, 225, 152, 0.5)",
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
        <p
          style={{
            position: "absolute",
            top: "clamp(27%, 24%, 22%)",
            left: "24%",
            fontSize: "clamp(1.5rem, 1.7rem, 2.5rem)",
            margin: 0,
            textAlign: "justify",
            color: "#633e30",
          }}
          className="chelsea-market-regular"
        >
          {wish.year}
        </p>

        <div
          style={{
            position: "absolute",
            top: "clamp(32%, 33%, 35%)",
            left: "24%",
            width: "clamp(47%, 53%, 55%)",
            height: "clamp(47%, 50%, 55%)",
            overflowY: "auto",
            boxSizing: "border-box",
            paddingRight: "0.5rem",
          }}
        >
          {wish.wishes.map((w, i) => (
            <React.Fragment key={i}>
              <p
                key={i}
                className="patrick-hand-regular"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  lineHeight: "1.2",
                  marginBottom: "0.5rem",
                  wordBreak: "break-word",
                  textAlign: "justify",
                }}
              >
                {w.text}
              </p>
              {wish.wishes.length > 1 && (
                <hr style={{ border: "1px solid #633e30" }} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "clamp(8%, 10%, 12%)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src="/button jadi/button tutup/Asset 19.svg"
              alt="Tutup"
              style={{
                width: "50px",
                height: "auto",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishDetailModal;
