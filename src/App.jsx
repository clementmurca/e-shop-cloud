import React, { useEffect, useState } from "react";
import { Auth } from "./component/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export function App() {

  const [videosList, setVideoList] = useState([]);
  const videoCollectionRef = collection(db, "videos");

  useEffect(() => {
    const getListVideo = async () => {
      try {
      const data = await getDocs(videoCollectionRef);
      console.log(data)
      } catch (error) {
        console.error("ca marche pas", error.message);
      }
    };
    getListVideo();
  }, []);

  return (
    <>
    <Auth />
    </>
  )
}

export default App
