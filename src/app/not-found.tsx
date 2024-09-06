import styles from "@/app/not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.text_wrap}>
        <p className={styles.status}>404</p>
        <p className={styles.text}>This page could not be found.</p>
      </div>
      <Link className={styles.button} href={"/"}>
        🏠 Home
      </Link>
    </div>
  );
}
