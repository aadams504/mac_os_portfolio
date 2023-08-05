// import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import WindowImg from "../assets/mac-window.png";
import "./Window.scss";

const Window = () => {
  // const [state, setState] = useState({ width: 320, height: 200 });
  return (
    <Draggable>
      <div className="window-container">
        <div className="window">
          <div className="window-topbar">
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="expand"></span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
