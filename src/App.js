import React, { useEffect, useState, useRef } from "react";
import Greenhouse from "./components/Greenhouse";
import SeedButton from "./components/SeedButton";
import WishModal from "./components/WishModal";
import PlantPot from "./components/PlantPot";
import WishDetailModal from "./components/WishDetailModal";
import BookAndTable from "./components/BookAndTable";
import MyWishPaper from "./components/MyWishPaper";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [groupedWishes, setGroupedWishes] = useState({});
  const [selectedWish, setSelectedWish] = useState(null);
  const [bookModal, setBookModal] = useState(false);
  const [wishesFromMe, setWishesFromMe] = useState({});

  const bgs = [
    "/background/malam duhai kekasih.svg",
    "/background/pagi manis.svg",
  ];
  const pots = [
    "/tanaman/bintang hijau/Asset 12.svg",
    "/tanaman/kecambah/Asset 13.svg",
    "/tanaman/kembang kuning/Asset 11.svg",
    "/tanaman/kembang putih/Asset 10.svg",
    "/tanaman/lancip bintang/Asset 9.svg",
    "/tanaman/tulip/Asset 8.svg",
  ];
  const usedPotPaths = new Set();

  const audioRef = useRef();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSeedClick = () => {
    setShowModal(true);
  };

  const handleBookClick = () => {
    setBookModal(true);
  };

  const fetchWishes = async () => {
    const querySnapshot = await getDocs(collection(db, "wishes"));
    const wishList = querySnapshot.docs.map((doc) => doc.data());

    const grouped = wishList.reduce((acc, wish) => {
      const year = wish.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(wish);
      return acc;
    }, {});

    setGroupedWishes(grouped);
  };

  const fetchWishesFromMe = async () => {
    const querySnapshot = await getDocs(collection(db, "wishes-from-ito"));
    const wishList = querySnapshot.docs.map((doc) => doc.data());

    setWishesFromMe(wishList);
  };

  useEffect(() => {
    fetchWishes();
    fetchWishesFromMe();
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const getAvailablePot = () => {
    const usedPotPaths = new Set();

    Object.values(groupedWishes).forEach((wishGroup) => {
      wishGroup.forEach((w) => {
        if (w.potPath && w.year !== new Date().getFullYear()) {
          usedPotPaths.add(w.potPath);
        }
      });
    });

    const unusedPot = pots.filter((p) => !usedPotPaths.has(p));

    if (unusedPot.length === 0) return null;

    const randomIndex = getRandomInt(0, unusedPot.length);
    return unusedPot[randomIndex];
  };

  const handleSaveWish = async (wishText) => {
    console.log("wishText:", wishText);

    const pot = getAvailablePot();

    const newWish = {
      text: wishText,
      year: new Date().getFullYear(),
      timestamp: new Date().toISOString(),
      potPath: pot,
    };

    try {
      await addDoc(collection(db, "wishes"), newWish);
      fetchWishes();
      setShowModal(false);
    } catch (error) {
      console.error("Error adding wish to Firestore: ", error);
    }
  };

  const now = new Date();
  const hour = now.getHours();
  let bg;
  console.log(hour);

  if (hour > 5 && hour < 18) bg = bgs[1];
  else bg = bgs[0];

  return (
    <Greenhouse imagePath={bg}>
      <SeedButton onClick={handleSeedClick} />

      {showModal && (
        <WishModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveWish}
        />
      )}

      <BookAndTable onClick={handleBookClick} />

      {bookModal && (
        <MyWishPaper
          onClose={() => setBookModal(false)}
          wishes={wishesFromMe}
        />
      )}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // biar nggak ganggu klik
        }}
      >
        {Object.entries(groupedWishes).map(([year, wishes], index) => {
          const potPath = wishes[0].potPath || getAvailablePot();

          let div = index < 3 ? index : index - 3;
          const potTop = index < 3 ? "19%" : "35%";
          const potLeft = `${18 + 20 * div}%`;

          return (
            <PlantPot
              key={year}
              wish={{ year, wishes }}
              onClick={() => setSelectedWish({ year, wishes })}
              imagePath={potPath}
              top={potTop}
              left={potLeft}
            />
          );
        })}
      </div>

      {selectedWish && (
        <WishDetailModal
          wish={selectedWish}
          onClose={() => setSelectedWish(null)}
        />
      )}
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/sound.mp3" type="audio/mp3" />
      </audio>
    </Greenhouse>
  );
}

export default App;
