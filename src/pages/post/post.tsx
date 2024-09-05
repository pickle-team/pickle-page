import styles from "@/pages/post/post.module.css";
import PostImage from "@/../public/images/models.png";
import Image from "next/image";

export default function Post() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={PostImage} alt="Models" />
    </div>
  );
}
