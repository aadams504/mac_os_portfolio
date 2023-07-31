import WindowImg from "../assets/mac-window.png";
import "./Window.scss";

const Window = () => {
  return (
    <div className="window-container">
      <img className="window" src={WindowImg} />
    </div>
  );
};

export default Window;
