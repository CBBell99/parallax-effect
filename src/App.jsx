import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer speed={1}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <h2>Web development is fun</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={2} speed={1}></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
