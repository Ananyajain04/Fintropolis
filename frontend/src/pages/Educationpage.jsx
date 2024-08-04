import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Educationpage() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-1 bg-[#001579]">
        <div className="h-[60%] mt-[80px] flex flex-col flex-stretch items-center">
          <div className="flex-1">
          <Link to="/home">
          <img src="./src/images/Vector.png" alt="" />
      </Link>
          </div>
          <div className="flex-1">
            <img src="./src/images/person.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/question-mark.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/Vector (1).png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/Group.png" alt="" />
          </div>
          <div className="flex-1">
            <img src="./src/images/education.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex-[10] bg-[#d4d7ea]  order-1">
        <div className="bg-white w-[100%] h-[12.5%]">
            <h1 className="p-[10px] font-calistoga">Fintropolis</h1>
        </div>
        <p className="ml-[50px] font-bold">Reccomended Courses</p>
        <div className="flex flex-col h-full">
            <div className="flex flex-row items-center">
                <img src="./src/images/Rectangle 49.png" alt="" className=" h-[175px] w-[400px] ml-[50px] mb-[10px]"/>
                <div className="flex flex-col h-full justify-center items-left ml-[50px]">
                    <p>Introduction to Finance, Accounting, Modeling and Valuation</p>
                    <p>Chris Hauron</p>
                    <p>3.5 Hours</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
            <img src="./src/images/Rectangle 50.png" alt="" className=" h-[175px] w-[400px] ml-[50px] mb-[10px]"/>
            <div className="flex flex-col h-full justify-center items-left ml-[50px]">
                    <p>The Complete Finance Manager Course</p>
                    <p>Scott Powell</p>
                    <p>5.5 Hours</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
            <img src="./src/images/Rectangle 51.png" alt="" className=" h-[175px] w-[400px] ml-[50px] mb-[10px]"/>
            <div  className="flex flex-col h-full justify-center items-left ml-[50px]">
                    <p>Financial Planning & Analysis: Building a Company’s Budget</p>
                    <p>Scott Powell</p>
                    <p>2.5 Hours</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Educationpage;
