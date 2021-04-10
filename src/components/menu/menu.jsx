import React from "react";
import "./menu.scss";

import MenuSection from "../menu-section/menu-section";
import { sections } from "../../data/menu";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title">Menu</div>
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
