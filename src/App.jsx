import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer>
          <h2>Web Development is fun!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
