// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./config/firebase";
// import { Auth } from "../config/firebase";

// export const Videos = () => {

//   const [videosList, setVideoList] = useState([]);
//   const videoCollectionRef = collection(db, "videos");

//   useEffect(() => {
//     const getListVideo = async () => {
//       try {
//       const data = await getDocs(videoCollectionRef);
//       const filteredData = data.docs.map((doc) => ({
//         ...doc.data,
//         id: doc.id
//       }));
//       setVideoList(filteredData);
//       } catch (error) {
//         console.error("ca marche pas", error.message);
//       }
//     };
//     getListVideo();
//   }, []);

//   return (
//     <>
//     <Auth />
//     <ul>
//         <li>test</li>
//         <li>test 2</li>
//     </ul>
//     </>
//   )
// }

// export default Videos
