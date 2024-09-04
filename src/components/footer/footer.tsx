import styles from "@/components/footer/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright &copy; 2024&nbsp;
      <Link className={styles.link} href="https://github.com/pickle-team">
        pickle-team
      </Link>
      &nbsp;All rights reserved.
    </footer>
  );
}
