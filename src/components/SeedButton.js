import React from "react";

const SeedButton = ({ onClick }) => {
    return(
        <button
            onClick={onClick}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                bottom: '2rem',
                left: '80%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: '#4a4a4a'
            }}
        >
            {/* <img
                src="/seed.png" 
                alt="Seed"
                style={{ width: '40px', height: '40px', marginBottom: '0.3rem' }}
            /> */}
            click me
        </button>
    );
};

export default SeedButton;