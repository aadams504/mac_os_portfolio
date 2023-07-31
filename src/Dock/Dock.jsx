import "./Dock.scss";

const Dock = () => {
  let icons = document.querySelectorAll(".icon");

  icons.forEach((item, index) => {
    item.addEventListener("mouseover", (e) => {
      focus(e.target, index);
    });
    item.addEventListener("mouseleave", () => {
      icons.forEach((item) => {
        item.style.transform = "scale(1)  translateY(0px)";
      });
    });
  });

  const focus = (elem, index) => {
    let prev = index - 1;
    let prev1 = index - 2;
    let next = index + 1;
    let next2 = index + 2;

    if (prev == -1) {
      console.log("first element");
      elem.style.transform = "scale(1.5)  translateY(-10px)";
    } else if (next == icons.length) {
      elem.style.transform = "scale(1.5)  translateY(-10px)";
      console.log("last element");
    } else {
      elem.style.transform = "scale(1.5)  translateY(-10px)";
      icons[prev].style.transform = "scale(1.2) translateY(-6px)";
      icons[prev1].style.transform = "scale(1.1)";
      icons[next].style.transform = "scale(1.2) translateY(-6px)";
      icons[next2].style.transform = "scale(1.1)";
    }
  };

  return (
    <div className="dock">
      <div className="dock-container">
        <li className="li-1">
          <div className="name">Finder</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
            alt=""
          />
        </li>
        <li className="li-2">
          <div className="name">Siri</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png"
            alt=""
          />
        </li>
        <li className="li-3">
          <div className="name">LaunchPad</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
            alt=""
          />
        </li>
        <li className="li-4">
          <div className="name">Contacts</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png"
            alt=""
          />
        </li>
        <li className="li-5">
          <div className="name">Notes</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
            alt=""
          />
        </li>
        <li className="li-6">
          <div className="name">Reminders</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png"
            alt=""
          />
        </li>
        <li className="li-7">
          <div className="name">Photos</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png"
            alt=""
          />
        </li>
        <li className="li-8">
          <div className="name">Messages</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853a55558a68e192ee08_messages.png"
            alt=""
          />
        </li>
        <li className="li-9">
          <div className="name">FaceTime</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png"
            alt=""
          />
        </li>
        <li className="li-10">
          <div className="name">Music</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png"
            alt=""
          />
        </li>
        <li className="li-11">
          <div className="name">Podcasts</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853cc718ba9ede6888f9_podcasts.png"
            alt=""
          />
        </li>
        <li className="li-12">
          <div className="name">TV</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png"
            alt=""
          />
        </li>
        <li className="li-13">
          <div className="name">App Store</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png"
            alt=""
          />
        </li>
        <li className="li-14">
          <div className="name">Safari</div>
          <img
            className="icon"
            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png"
            alt=""
          />
        </li>
        <li className="li-bin li-15">
          <div className="name">Bin</div>
          <img
            className="icon icon-bin"
            src="https://findicons.com/files/icons/569/longhorn_objects/128/trash.png"
            alt=""
          />
        </li>
      </div>
    </div>
  );
};

export default Dock;
