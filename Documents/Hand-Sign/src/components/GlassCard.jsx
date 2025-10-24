import React from "react";
const GlassCard = ({
  children,
  className = "",
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`glass glass-card ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
export default GlassCard;
