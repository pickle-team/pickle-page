"use client";

import { useState } from "react";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import Download from "@/pages/download/download";

import Text from "@/pages/text/text";
import Feature from "@/pages/feature/feature";
import Post from "@/pages/post/post";
import Footer from "@/components/footer/footer";

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <Download />
      </FullpageSection>
      <FullpageSection>
        <Text text="A new encounter like never before" />
      </FullpageSection>
      <FullpageSection>
        <Feature feature="Share" />
      </FullpageSection>
      <FullpageSection>
        <Feature feature="Chat" />
      </FullpageSection>
      <FullpageSection>
        <Feature feature="Live" />
      </FullpageSection>
      <FullpageSection>
        <Text text="Feel the fresh taste of pickles in your calm daily life." />
      </FullpageSection>
      <FullpageSection>
        <Post />
      </FullpageSection>
      <div style={{ height: 60 + 60 }}>
        <FullpageSection>
          <Footer />
        </FullpageSection>
      </div>
    </FullpageContainer>
  );
}
