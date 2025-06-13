import React, { useState } from "react";

const MyWishPaper = ({ onClose, wishes }) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page < wishes.length - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundImage: `url("/buku terbuka/Asset 4.svg")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "90%",
          maxWidth: "420px",
          aspectRatio: "3 / 4", // biar proporsional di semua layar
          padding: "3rem 2rem",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Judul Tahun */}
        <div
          style={{
            position: "absolute",
            top: "clamp(20%, 22%, 25%)",
            left: "20%",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.5rem, 1.7rem, 2.5rem)",
              fontWeight: "bold",
              textAlign: "justify",
              color: "#633e30",
            }}
            className="chelsea-market-regular"
          >
            {wishes[page].year}
          </p>
        </div>

        {/* Isi Teks */}
        <div
          className="patrick-hand-regular"
          style={{
            position: "absolute",
            top: "clamp(20%, 35%, 80%)",
            left: "20%",
            width: "60%",
            height: "40%",
            overflowY: "auto",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: "1.2",
              marginBottom: "0.5rem",
              wordBreak: "break-word",
              textAlign: "justify",
            }}
          >
            {wishes[page].wish}
          </p>
        </div>

        {/* Tombol */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Prev */}
          <button
            onClick={handlePrev}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            disabled={page === 0}
          >
            <img
              src={
                page === 0
                  ? "button arrow/kiri kabur/Asset 26.svg"
                  : "button arrow/kiri/Asset 24.svg"
              }
              alt="Sebelumnya"
              style={{ width: "clamp(40px, 8vw, 60px)" }}
            />
          </button>

          {/* Tutup */}
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src="/button jadi/button tutup/Asset 19.svg"
              alt="Tutup"
              style={{ width: "clamp(50px, 7vw, 65px)" }}
            />
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            disabled={page === wishes.length - 1}
          >
            <img
              src={
                page === wishes.length - 1
                  ? "/button arrow/kanan kabur/Asset 27.svg"
                  : "button arrow/kanan/Asset 25.svg"
              }
              alt="Berikutnya"
              style={{ width: "clamp(40px, 8vw, 60px)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWishPaper;
