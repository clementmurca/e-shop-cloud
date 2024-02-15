import React, { useEffect, useState } from "react";
import { Auth } from "./component/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
//import { Videos } from "./component/videos";

export function App() {

  const [videosList, setVideoList] = useState([]);
  const videoCollectionRef = collection(db, "videos");

  useEffect(() => {
    const getListVideo = async () => {
      try {
      const data = await getDocs(videoCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data,
        id: doc.id
      }));
      setVideoList(filteredData);
      console.log(filteredData);
      } catch (error) {
        console.error("ca marche pas", error.message);
      }
    };
    getListVideo();
  }, []);



  return (
    <>
    <Auth />
    {videosList.map((video) => (
    <ul key={video.id}>
        <li><h1>Titre de la vidéo : {video.title}</h1></li>
        <li><p>Date de sortie : {video.date}</p></li>
    </ul>
    ))}
    </>
  )
}

export default App
