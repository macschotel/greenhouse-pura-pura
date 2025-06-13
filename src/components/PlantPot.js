import React from "react";

const PlantPot = ({ wish, onClick, imagePath}) => {
    return (
        <div
        onClick={() => onClick(wish)}
        style={{
            width: '60px',
            height: '60px',
            backgroundImage: `url(${encodeURI(imagePath)})`,
            backgroundColor: 'blue',
            backgroundSize: 'cover',
            margin: '10px',
            cursor: 'pointer',
          }}
          title={`${wish.year}`}
        >
        </div>
    )
}

export default PlantPot;