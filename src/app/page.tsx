"use client";

import { useState } from "react";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import Download from "@/pages/download/download";
import styles from "./page.module.css";
import Text from "@/pages/text/text";
import Feature from "@/pages/feature/feature";
import Post from "@/pages/post/post";
import Footer from "@/components/footer/footer";
// import {
//   FullpageContainer,
//   FullpageSection,
// } from "@shinyongjun/react-fullpage";

// export default function Home() {
//   const [page, setPage] = useState(0);

//   const renderContent = () => {
//     switch (page) {
//       case 0:
//         return <Download />;
//       case 1:
//         return <Text text="A new encounter like never before" />;
//       case 2:
//         return <Feature feature="Share" />;
//       case 3:
//         return <Feature feature="Chat" />;
//       case 4:
//         return <Feature feature="Live" />;
//       case 5:
//         return (
//           <Text text="Feel the fresh taste of pickles in your calm daily life." />
//         );
//       case 6:
//         return <Post />;
//       default:
//         return null;
//     }
//   };
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   return (
//     <main className={styles.main}>
//       {/* {renderContent()} */}
//       {/* <Download />
//       <Text text="A new encounter like never before" />
//       <Feature feature="Share" /> <Feature feature="Chat" />
//       <Feature feature="Live" />
//       <Text text="Feel the fresh taste of pickles in your calm daily life." />
//       <Post /> */}

//       <FullpageContainer
//         activeIndex={activeIndex}
//         setActiveIndex={setActiveIndex}
//       >
//         <FullpageSection>
//           <div>Section 1</div>
//         </FullpageSection>
//         <FullpageSection>
//           <div>Section 2</div>
//         </FullpageSection>
//         <FullpageSection>
//           <div>Section 3</div>
//         </FullpageSection>
//         <FullpageSection isAutoHeight>
//           <footer>Footer</footer>
//         </FullpageSection>
//       </FullpageContainer>
//     </main>
//   );
// }

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
