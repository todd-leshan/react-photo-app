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
        <div className="container--view-controls">
          <div className="container--view-control adaptive-view active"></div>
          <div className="container--view-control grid-view"></div>
        </div>
        <div className="container--images adaptive-view">
          <div className="container--image">
            <form action="#" className="form--add-img">
              <label htmlFor="file--img">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  id="file--img"
                />
              </label>
            </form>
          </div>
          <div className="container--image">
            <img src={sample} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample2} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample2} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample2} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample2} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample2} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample} alt="img alt" loading="lazy" />
          </div>
          <div className="container--image">
            <img src={sample} alt="img alt" loading="lazy" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cutup;
