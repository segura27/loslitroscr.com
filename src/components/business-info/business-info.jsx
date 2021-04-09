import React from "react";
import "./business-info.scss";

const BusinessInfo = () => {
  return (
    <div className="business-info">
      <div className="business-title">San Pedro</div>
      <div className="business-details">
        <div className="address-text">
          Centro Comercial Plaza Real, San Pedro.{" "}
        </div>
        <div className="business-location-map"></div>
        <div className="business-contact-info">Tel: 888888</div>
        <div className="business-social-media">
          <ul>
            <li>IG</li>
            <li>FB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
