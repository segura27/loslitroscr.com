import React from "react";
import "./section-item.scss";

import {
  nonAlcoholicBadge,
  frozenBadge,
  newBadge,
} from "../misc/drink-option-badges";

const SectionItem = (props) => {
  return (
    <div className="section-item">
      <div className="item-header">
        <div className="item-badges">
          {props.badges.map((badge) => {
            if (badge === "frozen") {
              return frozenBadge;
            }
            if (badge === "non-alcoholic") {
              return nonAlcoholicBadge;
            }
            if (badge === "new") {
              return newBadge;
            }
            return null;
          })}
        </div>
        <div className="item-name">{props.name}</div>
      </div>
      <div className="item-description">{props.description}</div>
    </div>
  );
};

export default SectionItem;
