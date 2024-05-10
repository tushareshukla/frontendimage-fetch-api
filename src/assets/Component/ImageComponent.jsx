import React from "react";
import "./ImageComponent.css";
const ImageComponent = ({imageUrl,title,author,description,imageAlt,imageDate, role}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={imageAlt} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>
         {description}
        </p>
        <div className="card-footer">
          <span>{author} - {role}</span>
          <span>{imageDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
