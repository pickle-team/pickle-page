import styles from "@/components/navbar/navbar.module.css";
import Link from "next/link";
import logo from "@/../public/images/pickle_logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Link className={styles.menu} href="/support">
        Support
      </Link>
    </nav>
  );
}
