"use client";

import Download from "@/pages/download/download";
import styles from "./page.module.css";
import Text from "@/pages/text/text";
import { useState } from "react";
import Feature from "@/pages/feature/feature";
import Post from "@/pages/post/post";

export default function Home() {
  const [page, setPage] = useState(6);

  const renderContent = () => {
    switch (page) {
      case 0:
        return <Download />;
      case 1:
        return <Text text="A new encounter like never before" />;
      case 2:
        return <Feature feature="Share" />;
      case 3:
        return <Feature feature="Chat" />;
      case 4:
        return <Feature feature="Live" />;
      case 5:
        return (
          <Text text="Feel the fresh taste of pickles in your calm daily life." />
        );
      case 6:
        return <Post />;
      default:
        return null;
    }
  };

  return (
    <main className={styles.main}>
      {
        // renderContent()
      }
      <Download />
      <Text text="A new encounter like never before" />
      <Feature feature="Share" /> <Feature feature="Chat" />
      <Feature feature="Live" />
      <Text text="Feel the fresh taste of pickles in your calm daily life." />
      <Post />
    </main>
  );
}
