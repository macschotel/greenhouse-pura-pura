import React from "react";

const WishDetailModal = ({wish, onClose}) => {
    return (
        <div
        style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(228, 178, 178, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}
        >
            <div
            style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                width: '90%',
                maxWidth: '400px',
                textAlign: 'center',
                overflow: 'visible'
              }}
            >
                <h2>Harapan Tahun {wish.year}</h2>
                {wish.wishes.map((w, i) => (
                    <p style={{ marginTop: '1rem' }}>{w.text}</p>
                ))}
                <button style={{ marginTop: '1.5rem' }} onClick={onClose}>Tutup</button>
            </div>
        </div>
    )
}

export default WishDetailModal;