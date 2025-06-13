import React from "react";

const Greenhouse = ({ children, imagePath }) => {
    return (
         <div
            style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${encodeURI(imagePath)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
        >
            {children}
        </div>
    );
};

export default Greenhouse;