// components/MarqueeItem.js
import React from "react";

const MarqueeItem = ({ icon, title }) => (
  <div className="marquee-item">
    <span className="icon">
      <img className="img-fluid" src={icon} alt={title} />
    </span>
    <span className="title">{title}</span>
  </div>
);

export default MarqueeItem;
