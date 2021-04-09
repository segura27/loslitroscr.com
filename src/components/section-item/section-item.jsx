import React from "react";
import "./section-item.scss";

const SectionItem = (props) => {
  return (
    <div className="section-item">
      <div className="item-name">{props.name}</div>
      <div className="item-description">{props.description}</div>
    </div>
  );
};

export default SectionItem;
