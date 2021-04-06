import React from "react";
import "./main-animation.css";

const MainAnimation = () => {
  return (
    <div className="center">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="moon">
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
      </div>
      {/* <div className="clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div> */}
    </div>
  );
};

export default MainAnimation;
