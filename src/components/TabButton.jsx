import React from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button
        className={`px-4 py-2 border-0 rounded-md  font-RobotoCondensed cursor-pointer transition-all duration-200 ease-in-out
            hover:bg-[#1b082f] hover:text-[#ebe7ef] ${
              isSelected
                ? "bg-[#7925d3] text-[#ebe7ef]"
                : "bg-transparent text-[#a18aba]"
            }`}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
