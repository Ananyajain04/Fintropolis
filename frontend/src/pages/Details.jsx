import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
/*
import {registerSchema} from "src/pages/Auth";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers";

type Input=z.inder<typeof registerSchema>
*/
function Details () {
  const[ext,setText]=useState('')
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home'); // Redirect to the home page
      };
  return (
    <div>
      <h1>Enter Your Details</h1>
      <input placeholder="Name" className="form-control" onChange=() name="text"></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Details;