import { Button } from "@/components/ui/button";
import React from "react";
import "../index.css"
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <img src="./images/icon.png" alt="iconforwebpage" />
      <h1 className="text-6xl">Hi im the main page </h1>
      <h2>I meant the home page</h2>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button>Sign up</Button>
    </div>
  );
}

export default Main;
