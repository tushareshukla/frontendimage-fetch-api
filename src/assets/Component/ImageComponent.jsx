import React from "react";
import "./ImageComponent.css";
const ImageComponent = () => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <div className="card-content">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          scelerisque, felis a luctus consectetur, sem odio dictum mi, vitae
          dignissim sapien metus in nisl.
        </p>
        <div className="card-footer">
          <span>John Doe - Product Owner</span>
          <span>Nov 25, 2020</span>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
