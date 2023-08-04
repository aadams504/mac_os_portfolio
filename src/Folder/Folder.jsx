import FolderImg from "../assets/folder.png";

import "./Folder.scss";

const Folder = () => {
  return (
    <>
      <img className="folder" id="projects" src={FolderImg} alt="folder" />
      <p>Projects</p>
    </>
  );
};

export default Folder;
