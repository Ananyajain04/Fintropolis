import React from "react";
import { Input } from "@/components/ui/input";
import '../index.css';
import { useNavigate } from "react-router-dom";

function Formpage () {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
      };
  return (
    <div>
      <div>
        <h1 className="text-6xl">Enter your details</h1>
        <Input placeholder="Name" type="text"/>
        <Input placeholder="Age" type="text"/>
        <Input placeholder="Company" type="text"/>
        <Input placeholder="Income" type="text"/>
        <Input placeholder="Expenditure" type="text"/>
        <Input placeholder="Goals" type="text"/>
        <Input placeholder="Assets" type="text"/>
        <Input placeholder="Liabilities" type="text"/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Formpage;