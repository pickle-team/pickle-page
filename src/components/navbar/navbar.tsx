import styles from "@/components/navbar/navbar.module.css";
import Link from "next/link";
import logo from "@/../public/images/pickle_logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrap}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className={styles.button_wrap}>
          <Button href="/support" name="Support" />
        </div>
      </div>
    </nav>
  );
}

function Button({ href, name }: { href: string; name: string }) {
  return (
    <Link className={styles.menu} href={href}>
      {name}
    </Link>
  );
}
