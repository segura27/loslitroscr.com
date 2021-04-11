import React from "react";
import "./menu-section.scss";

import SectionItem from "../section-item/section-item";

let hoverAnimation = () => {
  let val = Math.floor(Math.random() * Math.floor(3));
  let varname = "";

  if (val === 0) {
    varname = "menu-section-yellow";
  } else if (val === 1) {
    varname = "menu-section-green";
  } else if (val === 2) {
    varname = "menu-section-red";
  }
  if (val === 3) {
    varname = "menu-section-purple";
  }

  return varname;
};

const MenuSection = (props) => {
  let varrr = hoverAnimation();
  return (
    <div className={`menu-section ${varrr}`}>
      <div className="section-header">{props.title}</div>
      <div className="section-items">
        {props.items.map((item) => {
          return (
            <SectionItem
              key={item.name}
              name={item.name}
              description={item.description}
              badges={item.badges}
            />
          );
        })}
        <div className="section-price">¢{props.price}</div>
      </div>
    </div>
  );
};

export default MenuSection;
