import styles from "@/pages/text/text.module.css";

export default function Text({ text }: { text: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
}
