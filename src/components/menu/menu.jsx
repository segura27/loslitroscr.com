import React from "react";
import "./menu.scss";

import MenuSection from "../menu-section/menu-section";
import { sections } from "../../data/menu";
import {
  frozenBadge,
  nonAlcoholicBadge,
  newBadge,
} from "../misc/drink-option-badges";

const Menu = () => {
  const optionNames = ["Bebida Frozen", "Bebida Sin alcohol", "Bebida Nueva"];
  return (
    <div className="menu">
      <div className="menu-title">Menu</div>
      <div className="menu-legend">
        {[frozenBadge, nonAlcoholicBadge, newBadge].map((option, idx) => {
          return (
            <div key={`${optionNames[idx]}`} className="menu-legend-item">
              {option}
              <div className="menu-legend-item-text">{optionNames[idx]}</div>
            </div>
          );
        })}
      </div>
      <div className="menu-sections">
        {sections.map((section) => {
          return (
            <MenuSection
              key={section.title}
              title={section.title}
              items={section.items}
              price={section.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
