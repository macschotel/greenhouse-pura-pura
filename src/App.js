import React, { useEffect, useState } from "react";
import Greenhouse from "./components/Greenhouse";
import SeedButton from "./components/SeedButton";
import WishModal from "./components/WishModal";
import PlantPot from "./components/PlantPot";
import WishDetailModal from "./components/WishDetailModal";

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const [showModal, setShowModal] = useState(false);
  const[groupedWishes, setGroupedWishes] = useState({});
  const [selectedWish, setSelectedWish] = useState(null);

  const handleSeedClick = () => {
    setShowModal(true);
  }

  const fetchWishes = async () => {
    const querySnapshot = await getDocs(collection(db, 'wishes'));
    const wishList = querySnapshot.docs.map((doc) => doc.data());

    const grouped = wishList.reduce((acc, wish) => {
      const year = wish.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(wish);
      return acc;
    }, {});

    setGroupedWishes(grouped);
  };

  useEffect(() => {
    fetchWishes();
  }, [])

  const handleSaveWish = async (wishText) => {
    console.log("wishText:", wishText);
    const newWish = {
      text: wishText,
      year: new Date().getFullYear(),
      timestamp: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'wishes'), newWish);
      fetchWishes();
      setShowModal(false)
    } catch(error) {
      console.error("Error adding wish to Firestore: ", error);
    }
  };

  return (
    <Greenhouse>
      <SeedButton onClick={handleSeedClick}/>

      {showModal && (
        <WishModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveWish}
        />
      )}

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        gap: '0.2rem',
        paddingTop: '1rem',
        paddingLeft: '4rem',
        maxWidth: '300px'
      }}>
        {Object.entries(groupedWishes).map(([year, wishes]) => (
          <PlantPot
            key={year}
            wish={{ year, wishes }}
            onClick={() => setSelectedWish({ year, wishes })}
          />
        ))}
      </div>

      {selectedWish && (
        <WishDetailModal
          wish={selectedWish}
          onClose={() => setSelectedWish(null)}
        />
      )}
    </Greenhouse>
  )
}

export default App;