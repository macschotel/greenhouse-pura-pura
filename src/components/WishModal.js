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
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "1rem",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Tulis</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            rows={4}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button type="submit">Tanam!</button>
            <button type="button" onClick={onClose}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishModal;
