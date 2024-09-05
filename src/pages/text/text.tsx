import styles from "@/pages/text/text.module.css";

export default function Text({ text }: { text: string }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
