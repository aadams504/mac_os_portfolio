import AppleLogo from "../assets/apple-black-logo.png";
import Wifi from "../assets/wifi.png";
import ControlCenter from "../assets/switch.png";
import Volume from "../assets/volume.png";
import Bluetooth from "../assets/bluetooth.png";
import Account from "../assets/account.png";
import Search from "../assets/search.png";
import Battery from "../assets/battery.png";

import "./menu.css";

const Menu = () => {
  const currDate = new Date()
    .toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
    .replace(",", "");
  const currTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="menu-container">
      <div className="menu-container-left">
        <div className="logo-container">
          <img id="apple-logo" src={AppleLogo} alt="apple-logo" />
        </div>
        <div className="menu-items-container-left">
          <p>
            <span>Finder</span>
          </p>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Window</p>
          <p>Help</p>
        </div>
      </div>
      <div className="menu-container-right">
        <div className="menu-items-container-right">
          <img id="volume" className="icons icon" src={Volume} alt="volume" />
          <img
            id="bluetooth"
            className="icons icon"
            src={Bluetooth}
            alt="bluetooth"
          />

          <img
            id="account"
            className="icons icon"
            src={Account}
            alt="account"
          />
          <img
            id="battery"
            className="icons icon"
            src={Battery}
            alt="battery"
          />
          <img id="wifi" className="icons icon" src={Wifi} alt="wifi" />
          <img id="search" className="icons icon" src={Search} alt="search" />
          <img
            id="control-center"
            className="icons icon"
            src={ControlCenter}
            alt="control-center"
          />
          <p>{currDate}</p>
          <p>{currTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
