import "./App.css";
import { motion } from "framer-motion";
//importing component
import images from "./images";
import { useState, useEffect, useRef } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const carousal = useRef();
  useEffect(() => {
    console.log("scrollWidth", carousal.current.scrollWidth);
    console.log("offsetWidth", carousal.current.offsetWidth);
    const scrollWidthNo = carousal.current.scrollWidth;
    setWidth(scrollWidthNo);
    console.log("width", width);
    console.log("carousal", carousal.current);
  }, []);

  return (
    <div className="App">
      <motion.div ref={carousal} className="carousal">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousal"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />{" "}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
