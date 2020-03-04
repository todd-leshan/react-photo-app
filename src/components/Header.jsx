import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = props => {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    import(`../assets/${props.avatar}`).then(image => {
      setImageSrc(image.default);
    });
  });

  return (
    <header>
      <div className="container--page-title">
        <h1 className="page-title">{props.title}</h1>
        <span className="page-subtitle">{props.subtitle}</span>
      </div>
      <div className="container--avatar">
        <img className="avatar" src={imageSrc} alt="user avatar" />
      </div>
    </header>
  );
};

Header.propsType = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  avatar: PropTypes.string.isRequired
};

export default Header;
