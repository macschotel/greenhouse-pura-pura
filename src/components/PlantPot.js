import React from "react";

// to-do: tambahin parameter untuk image potnya, random dari list
const PlantPot = ({ wish, onClick/*, imagePath*/ }) => {
    return (
        <div
        onClick={() => onClick(wish)}
        style={{
            width: '60px',
            height: '60px',
            // backgroundImage: 'url(/pot.png)', // ganti dengan aset pot kamu nanti
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