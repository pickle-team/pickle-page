import styles from "@/pages/feature/feature.module.css";
import ShareScreen from "@/../public/images/features/share_screen.png";
import ChatScreen from "@/../public/images/features/chat_screen.png";
import LiveScreen from "@/../public/images/features/live_screen.png";
import Image from "next/image";

export default function Feature({ feature }: { feature: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.feature}>{feature}</h1>
      <p className={styles.text}>
        Share your daily life with your anonymous friends.
      </p>
      <Image
        className={styles.image}
        src={
          feature === "Share"
            ? ShareScreen
            : feature === "Chat"
            ? ChatScreen
            : feature === "Live"
            ? LiveScreen
            : ""
        }
        alt={`${feature} Screen`}
      />
    </div>
  );
}
