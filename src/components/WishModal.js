import React, { useState } from "react";

const WishModal = ({ onClose, onSave }) => {
  const [wish, setWish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wish.trim()) return;
    onSave(wish);
    setWish("");
  };

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
          backgroundImage: `url("/modul landscape/Asset 3.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          maxWidth: "450px",
          aspectRatio: "4 / 3",
          position: "relative",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            top: "clamp(50%, 62%, 70%)",
            left: "53%",
            transform: "translate(-50%, -50%)",
            width: "63%",
            textAlign: "center",
          }}
        >
          <textarea
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            rows={4}
            placeholder="Bebas mau tulis apa aja. Nggak harus panjang-panjang, tulis semoga tahun ini bisa makan lele juga nggak apa-apa. Boleh diisi setiap hari kalau mau."
            style={{
              width: "100%",
              height: "clamp(75px, 80px, 90px)",
              padding: "0.6rem",
              resize: "none",
              fontFamily: "Patrick Hand, cursive",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              borderRadius: "10px",
              boxSizing: "border-box",
              background: "rgba(255, 254, 251, 0.91)",
            }}
          />
          <div
            style={{
              marginTop: "clamp(0.2rem, 0.4rem, 0.5rem)",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src="/button jadi/button tanam/Asset 17.svg"
                alt="Tutup"
                style={{
                  width: "clamp(60px, 66px, 75px)",
                  height: "auto",
                }}
              />
            </button>
            <button
              type="button"
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
                  width: "clamp(60px, 66px, 75px)",
                  height: "auto",
                }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishModal;
