"use client";

import Image from "next/image";
import styles from "./page.module.css";
import pickle from "@/../public/pickle.png";

export default function Home() {
  function onClickHandler() {
    alert("Comming Soon!");
  }
  return (
    <main className={styles.main}>
      <Image
        onClick={onClickHandler}
        className={styles.image}
        src={pickle}
        alt="pickle"
      />
      <h1 className={styles.text}>Pickle Comming Soon.</h1>
    </main>
  );
}
