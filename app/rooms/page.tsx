// "use client";
import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link'
import RoomCard from "../../components/roomCard/RoomCard"
import axios from 'axios';



async function getData() {
  const res = await axios.get('http://localhost:5279/allRooms', 
  { withCredentials:true });
  
  if (!res.data) {
    console.log("bad")
  }
 
  return res.data;
}

 async function  Rooms() {

  const data = getData();
 
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Rooms</h1>
    <div className={styles.grid} >
      {data.then(res => res.result.map((item) => (
      <RoomCard link={`/rooms/testId`}  img={"/Img/placeholder.jpg"} No={item.roomNo} title={item.roomType.roomtypeName} desc={item.roomType.description} status={item.status} />
        )))}
    </div>
  </div>
  )
}
export default Rooms