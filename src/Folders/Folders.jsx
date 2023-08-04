import Folder from "../Folder/Folder";
import FolderImg from "../assets/folder.png";
import "./Folders.scss";

const Folders = () => {
  // const handleClick = (e) => {
  //   console.log(e.target);
  //   console.log("Image clicked");
  // };

  // const FolderList = [
  //   {
  //     id: 1,
  //     url: { FolderImg },
  //     name: "Personal Docs",
  //     alt: "personal-docs",
  //   },
  //   {
  //     id: 2,
  //     url: { FolderImg },
  //     name: "Projects",
  //     alt: "projects",
  //   },
  //   {
  //     id: 3,
  //     url: { FolderImg },
  //     name: "Games",
  //     alt: "games",
  //   },
  // ];

  return (
    <div>
      <div className="folders-container">
        <div className="folders" id="folder-1">
          <Folder />
        </div>
      </div>
    </div>
  );
};

export default Folders;
