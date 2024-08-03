import React from "react";
import { Input } from "@/components/ui/input";
import '../index.css';
import { useNavigate } from "react-router-dom";

function FormPagefile () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home'); // Redirect to the signup page
  };
  return (
    <div>
      <div className="h-screen w-screen bg-[#010d47] text-black font-calistoga font-light flex justify-center">
      <div className="flex flex-col gap-[5px] justify-center items-center w-[50%] h-[90%] mt-[5vh] mb-[5vh] pr-[50px] pl-[50px] bg-[#d4d7ea] rounded-lg">
        <h1 className="text-6xl flex-1 pt-[50px] text-[#010d47] mb-[10px]">Enter your details</h1>
        <Input placeholder="First Name" type="text" className="flex-1"/>
        <Input placeholder="Last Name" type="text" className="flex-1"/>
        <Input placeholder="Age" type="text" className="flex-1"/>
        <Input placeholder="Company" type="text" className="flex-1"/>
        <Input placeholder="Income" type="text" className="flex-1"/>
        <Input placeholder="Expenditure" type="text" className="flex-1"/>
        <Input placeholder="Goals" type="text" className="flex-1"/>
        <Input placeholder="Assets" type="text" className="flex-1"/>
        <Input placeholder="Liabilities" type="text" className="flex-1"/>
        <button onClick={handleClick} className="bg-[#01084E] text-white">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default FormPagefile;