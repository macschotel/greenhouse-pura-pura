import React, { useEffect, useState } from "react";
import Greenhouse from "./components/Greenhouse";
import SeedButton from "./components/SeedButton";
import WishModal from "./components/WishModal";
import PlantPot from "./components/PlantPot";
import WishDetailModal from "./components/WishDetailModal";

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const[showModal, setShowModal] = useState(false);
  const[groupedWishes, setGroupedWishes] = useState({});
  const[selectedWish, setSelectedWish] = useState(null);
  const bgs = ['/background/malam duhai kekasih/Asset 31@3x.png', '/background/pagi manis/Asset 30@3x.png'];
  const pots = ['/tanaman/bintang hijau/Asset 12.svg', '/tanaman/kecambah/Asset 13.svg', '/tanaman/kembang kuning/Asset 11.svg', '/tanaman/kembang putih/Asset 10.svg', '/tanaman/lancip bintang/Asset 9.svg', '/tanaman/tulip/Asset 8.svg'];
  const usedPotPaths = new Set();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

  const getAvailablePot = () => {
    const usedPotPaths = new Set();

    Object.values(groupedWishes).forEach((wishGroup) => {
      wishGroup.forEach((w) => {
        if(w.potPath && w.year !== new Date().getFullYear()) {
          usedPotPaths.add(w.potPath);
        }
      });
    });

    const unusedPot = pots.filter((p) => !usedPotPaths.has(p));

    if(unusedPot.length === 0) return null;
    
    const randomIndex = getRandomInt(0, unusedPot.length);
    return unusedPot[randomIndex];
  }

  const handleSaveWish = async (wishText) => {
    console.log("wishText:", wishText);

    const pot = getAvailablePot();

    const newWish = {
      text: wishText,
      year: new Date().getFullYear(),
      timestamp: new Date().toISOString(),
      potPath: pot
    };

    try {
      await addDoc(collection(db, 'wishes'), newWish);
      fetchWishes();
      setShowModal(false)
    } catch(error) {
      console.error("Error adding wish to Firestore: ", error);
    }
  };

  const now = new Date();
  const hour = now.getHours();
  let bg;

  if(hour < 18) bg = bgs[0];
  else bg = bgs[1];

  return (
    <Greenhouse imagePath={bg}>
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
        {Object.entries(groupedWishes).map(([year, wishes]) => {
          const potPath = wishes[0].potPath || getAvailablePot();
          <PlantPot
            key={year}
            wish={{ year, wishes }}
            onClick={() => setSelectedWish({ year, wishes })}
            imagePath={potPath}
          />
        })}
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