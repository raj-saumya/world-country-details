import React from "react";
import anime from "animejs";

const switchThemeIcon = () => {
  anime({
    targets: ".icon",
    rotate: [0, "360deg"],
    duration: 800,
    easing: "linear"
  });
};

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="header">
      <div className="app-title">
        <h2>Where in the World ?</h2>
      </div>
      <div
        className="theme-section"
        style={{ cursor: "pointer" }}
        htmlFor=""
        onClick={() => {
          switchThemeIcon();
          toggleTheme();
        }}
      >
        <div style={{ paddingRight: "8px" }}>
          <img
            className="icon"
            src={`/assets/icon-${darkTheme ? "dark" : "light"}.svg`}
            alt=""
          />
        </div>
        <div>
          <label style={{ cursor: "pointer" }}>
            {darkTheme ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
