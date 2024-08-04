import React from "react";
import '../index.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Signup () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const handleClick = () => {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        setError('');
        navigate('/formpagefile');
      }
      };
  return (
    <div className="w-screen h-screen flex bg-[#01084E] justify-center items-center font-calistoga font-light">
      <div class="weirdshape" className="flex-1 w-full h-full">
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='m33.64 0-.17.25h-33L4.3 6h33.07l4-6zm8.33 0-4.33 6.5h-33l3.83 5.75h33.06L49.7 0zm8.34 0-8.5 12.75h-33l3.83 5.75H45.7L58.03 0zm8.33 0L45.97 19h-33l3.83 5.75h33.06L66.36 0zm-8.5 25.25L33.63 50l3.86 5.8L54.03 31h33l-3.83-5.75zm4.16 6.25L37.8 56.25l3.87 5.8 16.53-24.8h33l-3.84-5.75zm4.17 6.25L41.97 62.5l3.86 5.8 16.54-24.8h33l-3.84-5.75zM62.63 44l-16.5 24.75 3.87 5.8 16.53-24.8h33L95.7 44zM100 50.45l-3.87 5.8 3.87 5.81v-11.6zM0 50.46v11.6L12.5 80.8l3.86-5.8zm95.83 6.25-3.87 5.8L100 74.55v-11.6zm-4.17 6.24-3.86 5.8 12.2 18.3v-11.6zM0 62.96v11.6l8.33 12.49 3.86-5.8zm87.5 6.24L83.63 75 100 99.54V87.96zM50 75.45 33.64 100h7.72l12.5-18.75zm-50 0v11.6l4.16 6.24 3.87-5.8zm54.17 6.25L41.97 100h7.73l8.33-12.5zm4.17 6.25L50.3 100h7.73l4.17-6.25zM0 87.95v11.59l3.86-5.8zm62.5 6.25-3.87 5.8h7.73z'  stroke-width='1' stroke='none' fill='hsla(263, 85%, 54%, 1)'/><path d='M66.8.25 62.97 6h33l4.03 6.05V.45l-.14-.2zM0 .45v11.61L12.5 30.8l3.86-5.8zM62.63 6.5l-3.83 5.75h33l8.2 12.3v-11.6L95.7 6.5zm-4.16 6.25-3.84 5.75h33L100 37.06v-11.6l-8.47-12.71zM0 12.96v11.6l8.33 12.49 3.86-5.8zM54.3 19l-3.84 5.75h33L100 49.55l.01-.01V37.96L87.36 19zm-4.77 6.25H41.8L25.3 50l16.66 25-16.5 24.75h7.74L49.7 75 33.03 50zm-8.33 0h-7.74L16.96 50l16.67 25-16.5 24.75h7.73L41.36 75 24.7 50Zm-8.34 0h-7.73L8.63 50 25.3 75 8.8 99.75h7.73L33.03 75 16.36 50zm-16.07 0L.3 50l16.67 25L.46 99.75H8.2L24.7 75 8.02 50l16.5-24.75zM0 25.46v11.6l4.16 6.24 3.87-5.8zm0 12.5v11.58l3.86-5.79zm66.8 12.29L50.3 74.99l3.87 5.81 4.16 6.25 4.17 6.25 4.3 6.45h7.73L58.03 75l16.5-24.75zm16.06 0h-7.73L58.63 75l16.5 24.75h7.73L66.36 75zm.6 0L66.96 75l16.5 24.75h7.74L74.7 75l16.5-24.75zm16.07 0H91.8L75.3 75l16.5 24.75h7.73L83.03 75z'  stroke-width='1' stroke='none' fill='hsla(235, 97%, 15%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>       
      </div>
      <div class="loginpage" className="flex-1 bg-[#01084E]">
        <div class="login">
      <Card className="bg-[#fff7ff] h-[70vh] w-[60%] mx-auto">
      <h1 className="text-[#7426EE] text-center py-[50px]">Fintropolis</h1>
      <hr className="pb-4"/>
        <div className="flex flex-col justify-center items-center gap-4 w-[80%] mx-auto">
          <Input type="email" placeholder="Enter your Email" className="flex-1 rounded-[10px]" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Password"  className="flex-1 rounded-[10px]" value={password} onChange={(e) =>setPassword(e.target.value)}/>
          <Input type="password" placeholder="Confirm Password"  className="flex-1 rounded-[10px]" value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
          {error && <p className="text-red-500">{error}</p>}
          <button onClick={handleClick} className="flex-1 w-full rounded-[10px] bg-[#7426EE] text-white">Login</button>
        </div>
              </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
