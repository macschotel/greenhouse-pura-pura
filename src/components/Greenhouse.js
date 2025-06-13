import React from "react";

const Greenhouse = ({ children, imagePath }) => {
    return (
        <div style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${encodeURI(imagePath)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        position: 'relative',
        overflow: 'hidden',
      }}>
            {children}
        </div>
    );
};

export default Greenhouse;