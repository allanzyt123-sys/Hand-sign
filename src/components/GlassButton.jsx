import React from 'react';
import { Link } from 'react-router-dom';
const GlassButton = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type,
  disabled
}) => {
  const buttonClass = `glass-button ${variant} ${size} ${className}`;
  if (to) {
    return <Link to={to} className={buttonClass}>
        {children}
      </Link>;
  }
  return <button onClick={onClick} className={buttonClass} type={type} disabled={disabled}>
      {children}
    </button>;
};
export default GlassButton;