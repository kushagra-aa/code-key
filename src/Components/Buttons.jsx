import Dark from "./../assets/dark.svg";
import Light from "./../assets/light.svg";
import About from "./../assets/about.svg";
import Back from "./../assets/back.svg";
import Reset from "./../assets/reset.svg";

const Buttons = ({ isDark, isAbout, handelChange }) => {
  return (
    <div className={`buttons flex center ${!isDark && "light-buttons"} `}>
      {!isAbout && (
        <button onClick={() => handelChange("theme")}>
          <img src={isDark ? Light : Dark} alt="" />
        </button>
      )}
      {isAbout && (
        <button onClick={() => handelChange("back")}>
          <img src={Back} alt="" />
        </button>
      )}
      {!isAbout && (
        <button onClick={() => handelChange("about")}>
          <img src={About} alt="" />
        </button>
      )}
      {!isAbout && (
        <button onClick={() => handelChange("reset")}>
          <img src={Reset} alt="" />
        </button>
      )}
    </div>
  );
};

export default Buttons;
