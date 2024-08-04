import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Dropdownassets() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const options = ['Property', 'Car', 'Gold', 'Stocks','Mutual Funds','Jewelry'];
  const maxSelections = 3;

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selectedOption) => selectedOption !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container relative w-[100%] bg-[#ffffff] rounded-lg font-calistoga font-light" ref={dropdownRef}>
      <div className="dropdown-header flex justify-left items-center h-[100%] bg-[#fff7ff] rounded-lg " onClick={handleToggleDropdown}>
        <span className="pl-[10px] text-[#72717B]">{selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Assets'}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="dropdown-list absolute bg-[#fff7ff] w-[100%]">
          {options.map((option) => (
            <label key={option} className="dropdown-option flex items-center bg-[#fff7ff] w-[100%] text-[#72717B]">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                disabled={!selectedOptions.includes(option) && selectedOptions.length >= maxSelections}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdownassets;