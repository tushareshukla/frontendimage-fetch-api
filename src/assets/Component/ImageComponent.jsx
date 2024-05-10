import React, { useState } from "react";
import "./ImageComponent.css";
const ImageComponent = ({
  imageUrl,
  title,
  author,
  description,
  imageDate,
  role,
  imageUrlBig,
  profile
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    console.log("clicked");
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="card">
        <img src={imageUrl} alt={imageUrl} />
        <div className="overlay" onClick={toggleExpansion}>
          Learn More
        </div>
        <div className="dots">
          <span className="dot-blue"></span>
          <span className="dot-yellow"></span>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card-footer">
            <span>
              {author} - {role}
            </span>
            <span>{imageDate}</span>
          </div>
        </div>
      </div>
      {expanded && (
  <div className="big-card">
  <span className="close" onClick={toggleExpansion}>
    x
  </span>
  <img src={imageUrlBig} alt={imageUrlBig} />
  <div className="big-card-content">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="big-card-footer">
        <img src={profile} alt={profile}/>
      <div className="big-card-footer-text">
        {author} - {role}
      </div>
    
    </div>
  </div>
</div>
      )}
    </>
  );
};

export default ImageComponent;
