import React from "react";

import avatar from "../assets/avatar-minion.jpg";
import sample from "../assets/sample.png";
import sample2 from "../assets/sample2.jpg";

const Cutup = props => {
  return (
    <div className="App">
      <header>
        <div className="container--page-title">
          <h1 className="page-title">
            Vestibulum varius libero ac libero ultricies
          </h1>
          <span className="page-subtitle">
            Pellentesque urna lacus, porta a rutrum vel, posuere dictum velit.
          </span>
        </div>
        <div className="container--avatar">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </header>
      <main>
        <div className="container--images">
          <div className="container--image"></div>
          <div className="container--image">
            <img src={sample} alt="img alt" />
          </div>
          <div className="container--image">
            <img src={sample2} alt="img alt" />
          </div>
          <div
            className="container--image"
            style={{ backgroundImage: `url(${sample})` }}
          ></div>
          <div className="container--image"></div>
          <div className="container--image"></div>
          <div className="container--image"></div>
          <div className="container--image"></div>
        </div>
      </main>
    </div>
  );
};

export default Cutup;
