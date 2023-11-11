import React from "react";

const TabButton = ({ children, onClick, isSelected }) => {
  return (
    <li>
      <button onClick={onClick} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
