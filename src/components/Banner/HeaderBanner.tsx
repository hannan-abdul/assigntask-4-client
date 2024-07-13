import React from "react";
import "./header.css";

const HeaderBanner = () => {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Heavy</span>
          <span className="headerTitleLg">Excercise</span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderBanner;
