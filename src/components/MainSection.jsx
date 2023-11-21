import { Routes, Route} from "react-router-dom";
import Blue from './Blue.jsx';
import Red from'./Red.jsx';
import Home from './Home.jsx';
import Yellow from "./Yellow.jsx";
import Green from "./Green.jsx";

const MainSection = () => {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} className="blue" />
          <Route path="/red" element={<Red />} className="red" />
          <Route path="/yellow" element={<Yellow />} className="yellow" />
          <Route path="/green" element={<Green/>} className="green" />
        </Routes>
      </div>
    </>
  );
};

export default MainSection;
