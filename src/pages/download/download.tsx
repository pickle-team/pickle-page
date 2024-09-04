import styles from "@/pages/download/download.module.css";
import Image from "next/image";
import Link from "next/link";
import AppStore from "@/../public/icons/appstore.svg";
import PlayStore from "@/../public/icons/playstore.svg";
import Arrow from "@/../public/icons/arrow_down.svg";

export default function Download() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Pickle is delicious.</p>
      <div className={styles.button_wrap}>
        <Button name="App Store" href="/" />
        <div style={{ width: 20 }} />
        <Button name="Play Store" href="/" />
      </div>
      <Image className={styles.arrow} src={Arrow} alt="Arrow Down" />
    </div>
  );
}

function Button({ name, href }: { name: string; href: string }) {
  return (
    <Link className={styles.link} href={href}>
      <Image
        className={styles.icon}
        src={name === "App Store" ? AppStore : PlayStore}
        alt={name}
      />
      <p className={styles.name}>{name}</p>
    </Link>
  );
}
