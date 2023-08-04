import { useState, useEffect } from "react";
// import {DndProvider} from 'react-dnd';
import Folders from "../Folders/Folders";
import Dock from "../Dock/Dock";
import Menu from "../Menu/Menu";
import MobileWindow from "../MobileWindow/MobileWindow";
import Window from "../Window/Window";
import "./home.scss";

const Home = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 725;

  return (
    <div className="monitor-container">
      {isMobile ? (
        <div className="monitor-screen">
          <Menu />
          <Folders />
          <MobileWindow />
          <Dock />
        </div>
      ) : (
        <div className="monitor-screen">
          <Menu />
          <Folders />
          <Window />
          <Dock />
        </div>
      )}
    </div>
  );
};

export default Home;
