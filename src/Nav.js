import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        className="netflix_icon"
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="user"
        className="netflix_avatar"
      />
    </div>
  );
}

export default Nav;
