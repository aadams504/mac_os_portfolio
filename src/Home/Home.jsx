// import { useState, useEffect } from "react";
import Dock from "../Dock/Dock";
import Menu from "../Menu/Menu";
import Folder from "../assets/folder.png";
import Window from "../Window/Window";
import "./Home.scss";

const Home = () => {
  //   const [window, setWindow] = useState(false);

  const handleClick = (e) => {
    console.log(e.target);
    console.log("Image clicked");
  };

  return (
    <div className="monitor-container">
      <div className="monitor-screen">
        <Menu />
        <div className="folder-container">
          <div className="folders" id="folder-1">
            <img
              className="folder"
              id="about"
              src={Folder}
              alt="folder"
              onClick={handleClick}
            />
            <p>Personal Docs</p>
          </div>
          <div className="folders" id="folder-2">
            <img
              className="folder"
              id="projects"
              src={Folder}
              alt="folder"
              onClick={handleClick}
            />
            <p>Projects</p>
          </div>
          <div className="folders" id="folder-3">
            <img
              className="folder"
              id="games"
              src={Folder}
              alt="folder"
              onClick={handleClick}
            />
            <p>Games</p>
          </div>
        </div>
        <Window />

        <Dock />
      </div>
    </div>
  );
};

export default Home;
