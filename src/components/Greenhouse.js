import React from "react";

const Greenhouse = ({ children }) => {
    return (
        <div style = {{
            width: '100%',
            maxWidth: '480px',
            margin: '0 auto',
            minHeight: '100vh',
            backgroundColor: '#e6ffe6',
            // backgroundImage: 'url(/greenhouse-bg.png)', 
            backgroundSize: 'cover',
            backgroundReapt: 'no-repeat',
            backgroundPosition: 'top center',
            position: 'relative',
            padding: '1rem',
            boxSizing: 'border-box'
        }}>
            {children}
        </div>
    );
};

export default Greenhouse;