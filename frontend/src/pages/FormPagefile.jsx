import React from "react";
import { Input } from "@/components/ui/input";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Dropdownassets from "./Dropdownassets";
import Dropdownlia from "./Dropdownlia";
import Dropdowngoals from "./Dropdowngoals";
import axios from 'axios';

function FormPagefile() {
  const options1 = [
    "Home",
    "Vacation",
    "Emergency Funds",
    "Debt/Loans",
    "Education",
    "Family",
  ];
  const options2 = [
    "Property",
    "Car",
    "Gold",
    "Stocks",
    "Mutual Funds",
    "Jewelry",
  ];
  const options3 = ["Debt/Loan", "Mortgages", "Medical Bills", "Student Loans"];

  const handleSelect1 = (selectedOptions) => {
    console.log("Selected options for Dropdown 1:", selectedOptions);
  };

  const handleSelect2 = (selectedOptions) => {
    console.log("Selected options for Dropdown 2:", selectedOptions);
  };

  const handleSelect3 = (selectedOptions) => {
    console.log("Selected options for Dropdown 3:", selectedOptions);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home"); // Redirect to the signup page
  };
  return (
    <div>
      <div className="h-screen w-screen bg-[#010d47] text-black font-calistoga font-light flex justify-center">
        <div className="flex flex-col justify-center w-[75%] h-[90%] mt-[5vh] mb-[5vh] pr-[50px] pl-[50px] bg-[#d4d7ea] rounded-lg">
          <div className="text-center">
            <h1 className="flex-1 text-[#010d47] h-[25%] mb-[20px]">
              Enter your details
            </h1>
            <div className="flex-1 flex flex-row h-[25%] gap-[20px] text-[#333333]">
              <Input placeholder="First Name" type="text" className="flex-1 placeholder-black text-black bg-[#fff7ff]" />
              <Input placeholder="Last Name" type="text" className="flex-1 placeholder-black text-black bg-[#fff7ff]" />
              <Input placeholder="Age" type="text" className="flex-1 placeholder-black text-black bg-[#fff7ff]" />
            </div>
            <div className="flex-1 flex flex-row h-[25%] gap-[20px]">
              <Input placeholder="Company" type="text" className="flex-1 bg-[#fff7ff] border-0 placeholder-black text-black" />
              <Input placeholder="Income" type="text" className="flex-1 bg-[#fff7ff] placeholder-black text-black" />
              <Input placeholder="Expenditure" type="text" className="flex-1 bg-[#fff7ff] placeholder-black text-black" />
            </div>
            <div className="flex-1 flex flex-row h-10 gap-[20px]">
              <Dropdowngoals>
                options={options1}
                onSelect={handleSelect1}
                maxSelection={3}
                buttonLabel="Dropdown 1"
              </Dropdowngoals>
              <Dropdownassets>
                options={options2}
                onSelect={handleSelect2}
                maxSelection={3}
                buttonLabel="Dropdown 1"
              </Dropdownassets>
              <Dropdownlia>
                options={options3}
                onSelect={handleSelect3}
                maxSelection={3}
                buttonLabel="Dropdown 1"
              </Dropdownlia>
            </div>
            <button onClick={handleClick} className="bg-[#01084E] text-white mt-[10px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPagefile;
